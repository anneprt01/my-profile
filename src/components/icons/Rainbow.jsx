export default function Rainbow({ size = 40, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.6}
      viewBox="0 0 24 14"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M0 14v-2C0 5.4 5.4 0 12 0s12 5.4 12 14h-2C22 6.5 17.5 2 12 2S2 6.5 2 14z" fill="var(--color-red)" />
      <path d="M2 14v-1C2 6.6 6.6 2 12 2s10 4.6 10 11v1h-2c0-6.1-3.9-10-8-10s-8 3.9-8 10z" fill="var(--color-gold)" />
      <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8h-2c0-3.3-2.7-6-6-6s-6 2.7-6 6z" fill="var(--color-cyan)" />
    </svg>
  );
}
