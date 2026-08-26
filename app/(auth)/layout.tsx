import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { PageSilhouette } from "@/components/brand/page-silhouette";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg px-5 py-10">
      <PageSilhouette />
      <Link href="/" className="mb-6">
        <Logo height={72} />
      </Link>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
