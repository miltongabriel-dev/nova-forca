import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PageSilhouette } from "@/components/brand/page-silhouette";
import { AdminTabs } from "@/components/nav/admin-tabs";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg">
      <PageSilhouette />
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4">
          <Link href="/home" className="flex items-center gap-3">
            <Logo height={32} />
            <p className="text-xs text-ink-muted">Admin panel</p>
          </Link>
        </div>
        <div className="mx-auto max-w-3xl px-5 pb-3">
          <AdminTabs />
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-6">{children}</main>
    </div>
  );
}
