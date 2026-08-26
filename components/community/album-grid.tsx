import { AlbumFrame } from "@/components/community/album-frame";
import type { albums as albumsData } from "@/lib/mock-data";

export function AlbumGrid({ albums }: { albums: typeof albumsData }) {
  return (
    <div className="space-y-4">
      <p className="text-xs text-ink-muted">
        Photos from classes and events will show up here once uploaded.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {albums.map((album) => (
          <div key={album.id}>
            <AlbumFrame />
            <p className="mt-2 truncate text-sm font-bold text-ink">{album.title}</p>
            <p className="text-xs text-ink-muted">
              {album.date} · {album.photoCount} photos
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
