export default function MusicNote({ size = 12, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path
        fill="var(--color-cyan-light)"
        d="M10 1h2v8h-2zM9 2h3v1H9zM4 8h4v2H4zM3 9h1v3H3zM7 9h1v3H7zM4 11h2v2H4zM2 11a2 2 0 0 0 2 2zM3 10a2 2 0 0 0-1 1z"
      />
    </svg>
  );
}
