export default function Speaker({ muted = false, size = 18, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="currentColor" d="M1 6h3v4H1zM4 5h2v6H4zM6 4h1v8H6z" />
      {!muted ? (
        <path fill="currentColor" d="M10 5h1v2h-1zM11 4h1v1h-1zM11 11h1v1h-1zM10 9h1v2h-1zM12 3h1v10h-1z" />
      ) : (
        <path fill="var(--color-red)" d="M10 5h1v1h-1zM11 6h1v1h-1zM12 7h1v1h-1zM11 8h1v1h-1zM10 9h1v1h-1z" />
      )}
    </svg>
  );
}
