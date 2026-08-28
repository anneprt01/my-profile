import "./AssetPlaceholder.css";

/**
 * Emplacement temporaire pour un asset fourni (horse_run.png, horse_head.png,
 * anne_head.png, friend_head.png, visual_reference.png) qui n'a pas encore pu
 * être déposé dans /public/assets. Ne remplace PAS l'asset par une illustration
 * générée : ce bloc reste volontairement neutre et explicite jusqu'à ce que le
 * vrai fichier soit fourni.
 */
export default function AssetPlaceholder({ label, ratio = "1 / 1", compact = false, className = "" }) {
  return (
    <div
      className={`asset-placeholder ${compact ? "asset-placeholder--compact" : ""} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Asset en attente : ${label}`}
    >
      <span className="asset-placeholder__mark">?</span>
      {!compact && <span className="asset-placeholder__label">{label}</span>}
    </div>
  );
}
