export default function Skull({ size = 14, className = "" }) {
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
        fill="currentColor"
        d="M5 2h6v1H5zM4 3h1v1H4zM11 3h1v1h-1zM3 4h1v5H3zM12 4h1v5h-1zM4 4h8v1H4zM4 5h1v3H4zM11 5h1v3h-1zM5 5h2v3H5zM9 5h2v3H9zM4 9h8v1H4zM5 10h2v1H5zM9 10h2v1H9zM6 11h1v1H6zM9 11h1v1H9z"
      />
    </svg>
  );
}
