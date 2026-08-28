/**
 * Décor arcade fixe : espace/étoiles, grille synthwave, scanlines, vignette.
 * Purement décoratif (CSS/SVG), aucune animation nécessaire au repos.
 */
export default function ArcadeBackdrop() {
  return (
    <>
      <div className="arcade-backdrop" aria-hidden="true">
        <div className="arcade-backdrop__stars" />
        <div className="arcade-backdrop__horizon" />
        <div className="arcade-backdrop__grid" />
      </div>
      <div className="arcade-scanlines" aria-hidden="true" />
      <div className="arcade-vignette" aria-hidden="true" />
    </>
  );
}
