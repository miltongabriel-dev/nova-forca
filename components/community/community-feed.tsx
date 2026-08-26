"use client";

import { useState } from "react";
import { Segmented } from "@/components/ui/segmented";
import { PostCard } from "@/components/community/post-card";
import type { posts as postsData } from "@/lib/mock-data";

const filters: Record<string, (typeof postsData)[number]["category"] | null> = {
  All: null,
  Events: "event",
  Birthdays: "birthday",
  Actions: "action",
};

export function CommunityFeed({ posts }: { posts: typeof postsData }) {
  const [filter, setFilter] = useState("All");
  const category = filters[filter];
  const visible = category ? posts.filter((p) => p.category === category) : posts;

  return (
    <div className="space-y-4">
      <Segmented options={Object.keys(filters)} onChange={setFilter} />
      <div className="space-y-4">
        {visible.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {visible.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-muted">
            Nothing here yet in this category.
          </p>
        )}
      </div>
    </div>
  );
}
