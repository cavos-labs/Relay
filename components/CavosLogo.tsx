export function CavosLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Diamond (square rotated 45°) with four facets — Cavos logo */}
      <path
        d="M12 3L21 12L12 21L3 12L12 3Z"
        fill="currentColor"
        className="text-[#d7d2c8]"
      />
      <path
        d="M12 3L3 12L12 21L21 12L12 3Z"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.5"
        fill="none"
        className="text-white/30"
      />
    </svg>
  );
}
