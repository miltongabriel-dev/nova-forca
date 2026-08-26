import Link from "next/link";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MagicLinkPage() {
  return (
    <Card>
      <CardContent className="space-y-5">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Mail size={22} />
          </div>
          <h1 className="font-display text-xl uppercase tracking-wide text-ink">
            Magic link
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            We'll send a sign-in link straight to your email — no password needed.
          </p>
        </div>

        <form className="space-y-4">
          <Input label="Email" id="email" type="email" placeholder="you@email.com" autoComplete="email" />
          <Button type="submit" className="w-full">
            Send link
          </Button>
        </form>

        <p className="text-center text-sm text-ink-muted">
          <Link href="/login" className="font-semibold text-accent">
            Back to password sign-in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
