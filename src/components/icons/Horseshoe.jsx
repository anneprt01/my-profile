/**
 * Fer à cheval pixel-art. Utilisé pour toutes les notations (jamais d'étoiles).
 * `state`: "filled" | "empty" | "selected"
 */
export default function Horseshoe({ state = "filled", size = 16, title, className = "" }) {
  const fill =
    state === "empty"
      ? "var(--color-disabled)"
      : state === "selected"
        ? "var(--color-cyan)"
        : "var(--color-gold)";

  return (
    <svg
      className={`icon-horseshoe icon-horseshoe--${state} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        fill={fill}
        d="M5 1h2v1H5zM9 1h2v1H9zM4 2h1v1H4zM11 2h1v1h-1zM4 3h1v4H4zM11 3h1v4h-1zM3 4h1v5H3zM12 4h1v5h-1zM3 9h1v3H3zM12 9h1v3h-1zM4 12h1v2H4zM11 12h1v2h-1zM5 14h1v1H5zM10 14h1v1h-1z"
      />
    </svg>
  );
}
