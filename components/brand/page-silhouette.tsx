export function PageSilhouette() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/silhouette.png"
      alt=""
      aria-hidden
      className="pointer-events-none fixed right-0 top-1/2 z-0 h-[38vh] w-auto -translate-y-1/2 translate-x-[20%] select-none object-contain opacity-[0.04] sm:h-[48vh]"
    />
  );
}
