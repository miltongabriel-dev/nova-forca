import { Plus, Users } from "lucide-react";
import { SectionHeader } from "@/components/nav/section-header";
import { CommunityTabs } from "@/components/community/community-tabs";
import { posts, albums } from "@/lib/mock-data";

export default function CommunityPage() {
  return (
    <>
      <SectionHeader
        title="Community"
        subtitle="Our family beyond the mats."
        icon={Users}
        action={
          <button
            type="button"
            aria-label="New post"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"
          >
            <Plus size={18} />
          </button>
        }
      />
      <main className="mx-auto max-w-lg px-4 py-5">
        <CommunityTabs posts={posts} albums={albums} />
      </main>
    </>
  );
}
