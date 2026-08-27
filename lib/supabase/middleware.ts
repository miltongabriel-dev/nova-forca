import { type NextRequest, NextResponse } from "next/server";
import type { CookieOptions } from "@supabase/ssr";
import type { Database } from "@/lib/types/database.types";

export async function updateSession(request: NextRequest) {
  const fallback = NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return fallback;
  }

  try {
    let response = fallback;

    const { createServerClient } = await import("@supabase/ssr");

    const supabase = createServerClient<Database>(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({ request });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    await supabase.auth.getUser();

    return response;
  } catch (error) {
    console.error("[updateSession] Supabase session check failed:", error);
    return fallback;
  }
}
