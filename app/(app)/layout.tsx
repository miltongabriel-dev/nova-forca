import { BottomNav } from "@/components/nav/bottom-nav";
import { PageSilhouette } from "@/components/brand/page-silhouette";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg pb-24">
      <PageSilhouette />
      {children}
      <BottomNav />
    </div>
  );
}
