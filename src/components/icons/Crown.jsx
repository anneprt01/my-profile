export default function Crown({ size = 18, className = "" }) {
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
        d="M1 6h2v1H1zM7 4h2v1H7zM13 6h2v1h-2zM2 7h1v1H2zM7 5h1v1H7zM13 7h1v1h-1zM2 8h12v1H2zM2 9h12v3H2z"
      />
      <path fill="var(--color-red)" d="M2 9h1v1H2zM7 9h2v1H7zM13 9h1v1h-1z" />
    </svg>
  );
}
