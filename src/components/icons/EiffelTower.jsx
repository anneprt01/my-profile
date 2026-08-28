export default function EiffelTower({ size = 22, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 1.3}
      viewBox="0 0 16 20"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path
        fill="var(--color-white)"
        d="M7 0h2v2H7zM6 2h4v1H6zM5 3h6v1H5zM6 4h1v3H6zM9 4h1v3H9zM4 7h8v1H4zM4 8h2v2H4zM10 8h2v2H4zM6 8h4v2H6zM3 10h10v1H3zM5 11h2v3H5zM9 11h2v3H9zM2 14h12v1H2zM1 15h14v1H1zM0 16h16v2H0z"
      />
    </svg>
  );
}
