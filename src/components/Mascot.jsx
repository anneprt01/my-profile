import AssetPlaceholder from "./AssetPlaceholder";
import "./Mascot.css";

const SOURCES = {
  "horse-run": { file: "/assets/horse_run.png", label: "horse_run.png" },
  "horse-head": { file: "/assets/horse_head.png", label: "horse_head.png" },
  "anne-head": { file: "/assets/anne_head.png", label: "anne_head.png" },
  "friend-head": { file: "/assets/friend_head.png", label: "friend_head.png" },
};

/**
 * Rend un asset mascotte/tête flottante si présent dans /public/assets,
 * sinon un AssetPlaceholder explicite. `variant` correspond aux fichiers
 * OBLIGATOIRES listés dans la Design Spec.
 */
export default function Mascot({ variant, alt, className = "", available = false, flip = false, compact = false }) {
  const source = SOURCES[variant];
  if (available) {
    return (
      <img
        className={`mascot mascot--${variant} ${flip ? "mascot--flip" : ""} ${className}`}
        src={source.file}
        alt={alt}
      />
    );
  }
  return (
    <AssetPlaceholder
      className={`mascot mascot--${variant} ${className}`}
      label={source.label}
      ratio={!compact && variant === "horse-run" ? "16 / 11" : "1 / 1"}
      compact={compact}
    />
  );
}
