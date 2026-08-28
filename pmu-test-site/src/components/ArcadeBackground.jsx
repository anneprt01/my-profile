// Fond décoratif "ambiance jeu vidéo" en CSS pur (aucune image à sourcer) :
// grille néon façon horizon synthwave, étoiles/bruit, scanlines de vieux
// écran cathodique. Purement visuel, ne capte jamais le clic (pointer-events
// none) et reste fixe derrière le contenu qui, lui, garde des fonds solides
// pour rester lisible.
export default function ArcadeBackground() {
  return (
    <div className="arcade-bg" aria-hidden="true">
      <div className="arcade-bg__stars" />
      <div className="arcade-bg__horizon" />
      <div className="arcade-bg__grid" />
      <div className="arcade-bg__scanlines" />
      <div className="arcade-bg__vignette" />
    </div>
  )
}
