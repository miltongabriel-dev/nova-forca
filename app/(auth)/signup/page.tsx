"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Trash2, UserRound, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "adult_student" | "guardian";

export default function SignupPage() {
  const [role, setRole] = useState<Role>("adult_student");
  const [dependents, setDependents] = useState([{ id: 1 }]);

  return (
    <Card>
      <CardContent className="space-y-5">
        <div className="text-center">
          <h1 className="font-display text-xl uppercase tracking-wide text-ink">
            Join the family
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Kids, adults, parents — every belt starts with a sign-up.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 rounded-xl bg-surface-muted p-1">
          <button
            type="button"
            onClick={() => setRole("adult_student")}
            className={cn(
              "flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition-colors",
              role === "adult_student" ? "bg-surface text-ink shadow-soft" : "text-ink-muted",
            )}
          >
            <UserRound size={16} /> I'm a student
          </button>
          <button
            type="button"
            onClick={() => setRole("guardian")}
            className={cn(
              "flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-sm font-semibold transition-colors",
              role === "guardian" ? "bg-surface text-ink shadow-soft" : "text-ink-muted",
            )}
          >
            <Users size={16} /> I'm a guardian
          </button>
        </div>

        <form className="space-y-4">
          <Input label="Full name" id="name" placeholder="Your name" autoComplete="name" />
          <Input label="Email" id="email" type="email" placeholder="you@email.com" autoComplete="email" />
          <Input label="Phone" id="phone" type="tel" placeholder="07000 000000" autoComplete="tel" />
          <Input label="Password" id="password" type="password" placeholder="••••••••" autoComplete="new-password" />

          {role === "guardian" && (
            <div className="space-y-3 rounded-xl border border-dashed border-border p-4">
              <p className="text-sm font-semibold text-ink">Kids enrolling</p>
              {dependents.map((dep, i) => (
                <div key={dep.id} className="flex items-end gap-2">
                  <Input
                    label={`Child ${i + 1} name`}
                    id={`dep-${dep.id}`}
                    placeholder="Full name"
                    className="flex-1"
                  />
                  <button
                    type="button"
                    aria-label="Remove"
                    onClick={() => setDependents((d) => d.filter((x) => x.id !== dep.id))}
                    className="mb-1 flex h-12 w-11 shrink-0 items-center justify-center rounded-xl text-ink-faint hover:bg-surface-muted hover:text-accent"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setDependents((d) => [...d, { id: Date.now() }])}
                className="flex items-center gap-1.5 text-sm font-semibold text-accent"
              >
                <Plus size={14} /> Add another child
              </button>
            </div>
          )}

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <p className="text-center text-sm text-ink-muted">
          Already training with us?{" "}
          <Link href="/login" className="font-semibold text-accent">
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
