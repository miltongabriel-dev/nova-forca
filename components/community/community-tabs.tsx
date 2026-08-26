"use client";

import { useState } from "react";
import { Segmented } from "@/components/ui/segmented";
import { CommunityFeed } from "@/components/community/community-feed";
import { AlbumGrid } from "@/components/community/album-grid";
import type { posts as postsData, albums as albumsData } from "@/lib/mock-data";

interface CommunityTabsProps {
  posts: typeof postsData;
  albums: typeof albumsData;
}

export function CommunityTabs({ posts, albums }: CommunityTabsProps) {
  const [tab, setTab] = useState("Feed");

  return (
    <div className="space-y-4">
      <Segmented options={["Feed", "Photos"]} onChange={setTab} />
      {tab === "Feed" ? <CommunityFeed posts={posts} /> : <AlbumGrid albums={albums} />}
    </div>
  );
}
