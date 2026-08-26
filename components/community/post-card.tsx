import { Heart, MessageCircle, Pin, Megaphone, Cake, PartyPopper, HeartHandshake, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { postCategoryLabel, type posts } from "@/lib/mock-data";

const categoryMeta = {
  announcement: { icon: Megaphone, tone: "accent" as const },
  birthday: { icon: Cake, tone: "neutral" as const },
  event: { icon: PartyPopper, tone: "dark" as const },
  action: { icon: HeartHandshake, tone: "accent" as const },
  wall: { icon: ImageIcon, tone: "neutral" as const },
};

export function PostCard({ post }: { post: (typeof posts)[number] }) {
  const { icon: CategoryIcon, tone } = categoryMeta[post.category];

  return (
    <Card className="overflow-hidden">
      <div className="flex items-start gap-3 p-5 pb-3">
        <Avatar name={post.author} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink">{post.author}</p>
          <p className="truncate text-xs text-ink-muted">
            {post.role} · {post.time}
          </p>
        </div>
        {post.pinned && (
          <Badge tone="dark">
            <Pin size={12} /> Pinned
          </Badge>
        )}
      </div>

      <div className="px-5 pb-4">
        <Badge tone={tone} className="mb-2">
          <CategoryIcon size={12} /> {postCategoryLabel[post.category]}
        </Badge>
        <h3 className="font-display text-lg leading-tight text-ink">{post.title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{post.body}</p>
      </div>

      <div className="flex items-center gap-5 border-t border-border px-5 py-3">
        <button className="flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-accent">
          <Heart size={18} /> {post.likes}
        </button>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-accent">
          <MessageCircle size={18} /> {post.comments}
        </button>
      </div>
    </Card>
  );
}
