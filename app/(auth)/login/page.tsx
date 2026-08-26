import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <Card>
      <CardContent className="space-y-5">
        <div className="text-center">
          <h1 className="font-display text-xl uppercase tracking-wide text-ink">
            Welcome back
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Sign in to keep track of your training and your family.
          </p>
        </div>

        <form className="space-y-4">
          <Input label="Email" id="email" type="email" placeholder="you@email.com" autoComplete="email" />
          <Input label="Password" id="password" type="password" placeholder="••••••••" autoComplete="current-password" />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <div className="flex items-center gap-3 text-xs text-ink-faint">
          <span className="h-px flex-1 bg-border" />
          or
          <span className="h-px flex-1 bg-border" />
        </div>

        <Link href="/magic-link">
          <Button variant="outline" className="w-full">
            Sign in with a magic link
          </Button>
        </Link>

        <p className="text-center text-sm text-ink-muted">
          Not training with us yet?{" "}
          <Link href="/signup" className="font-semibold text-accent">
            Create an account
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
