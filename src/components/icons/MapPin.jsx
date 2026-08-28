export default function MapPin({ size = 16, className = "" }) {
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
        fill="var(--color-red)"
        d="M5 1h6v1H5zM4 2h1v1H4zM11 2h1v1h-1zM3 3h1v4H3zM12 3h1v4h-1zM4 7h1v1H4zM11 7h1v1h-1zM5 8h6v1H5zM6 2h4v5H6z"
      />
      <path fill="var(--color-gold)" d="M6 2h4v5H6z" opacity="0.001" />
      <path fill="var(--color-white)" d="M7 3h2v3H7z" />
      <path fill="var(--color-red)" d="M7 9h2v5H7z" />
    </svg>
  );
}
