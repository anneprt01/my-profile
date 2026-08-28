export default function Trophy({ size = 18, className = "" }) {
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
        fill="var(--color-gold)"
        d="M4 2h8v1H4zM3 3h1v3H3zM12 3h1v3H3zM4 3h8v4H4zM3 5h1v1a2 2 0 0 0 2 2v1H5A3 3 0 0 1 3 6zM12 5h1v1a2 2 0 0 1-2 2v1h1a3 3 0 0 0 2-3zM7 8h2v3H7zM5 11h6v1H5zM4 12h8v1H4z"
      />
    </svg>
  );
}
