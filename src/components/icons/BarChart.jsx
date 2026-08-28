export default function BarChart({ size = 14, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path fill="var(--color-gold)" d="M2 9h3v6H2zM7 5h3v10H7zM12 2h3v13h-3z" />
    </svg>
  );
}
