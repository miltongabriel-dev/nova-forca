import { Pin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/mock-data";

export default function AdminAnnouncementsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl uppercase tracking-wide text-ink">Announcements</h1>
        <p className="text-sm text-ink-muted">
          Announcements and wall posts that appear for the whole NovaForça community.
        </p>
      </div>

      <Card>
        <CardContent className="space-y-3">
          <p className="text-sm font-semibold text-ink">New announcement</p>
          <input
            placeholder="Title"
            className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <textarea
            placeholder="Write the announcement for students and families..."
            rows={3}
            className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <div className="flex justify-end">
            <Button size="sm">Publish</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {posts.map((post) => (
          <Card key={post.id} className="flex items-start gap-3 p-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{post.title}</p>
              <p className="mt-0.5 line-clamp-2 text-sm text-ink-muted">{post.body}</p>
              <p className="mt-1.5 text-xs text-ink-faint">{post.author} · {post.time}</p>
            </div>
            {post.pinned && (
              <Badge tone="dark">
                <Pin size={12} /> Pinned
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
