// Fond décoratif "ambiance jeu vidéo" en CSS pur (aucune image à sourcer) :
// taches de couleur floutées + grille néon bicolore façon horizon synthwave
// + étincelles + scanlines CRT. Base reprise du mockup validé
// (mockup_carte_pmu.html), étendue à toute la hauteur de la page plutôt
// qu'à une seule section hero. Purement visuel : pointer-events none,
// fixe derrière un contenu qui garde ses propres fonds opaques.
const BLOBS = [
  { color: 'var(--blob-red)', size: 560, top: '-10%', left: '-12%', opacity: 0.55 },
  { color: 'var(--blob-cyan)', size: 480, top: '2%', left: '70%', opacity: 0.5 },
  { color: 'var(--blob-magenta)', size: 460, top: '44%', left: '32%', opacity: 0.5 },
  { color: 'var(--blob-gold)', size: 340, top: '24%', left: '0%', opacity: 0.45 },
  { color: 'var(--blob-cyan)', size: 400, top: '68%', left: '76%', opacity: 0.45 },
  { color: 'var(--blob-red)', size: 380, top: '82%', left: '10%', opacity: 0.45 },
]

const SPARKLES = [
  { color: 'var(--blob-gold)', top: '8%', left: '85%' },
  { color: 'var(--neon-cyan)', top: '20%', left: '12%' },
  { color: 'var(--blob-magenta)', top: '15%', left: '55%' },
  { color: '#fff', top: '35%', left: '92%' },
  { color: 'var(--blob-gold)', top: '55%', left: '8%' },
  { color: 'var(--neon-cyan)', top: '65%', left: '60%' },
  { color: 'var(--blob-magenta)', top: '80%', left: '30%' },
  { color: '#fff', top: '90%', left: '70%' },
]

export default function ArcadeBackground() {
  return (
    <div className="arcade-bg" aria-hidden="true">
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="arcade-bg__blob"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            opacity: blob.opacity,
          }}
        />
      ))}

      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="arcade-bg__sparkle"
          style={{
            top: s.top,
            left: s.left,
            background: s.color,
            boxShadow: `0 0 10px ${s.color}`,
          }}
        />
      ))}

      <div className="arcade-bg__grid" />
      <div className="arcade-bg__scanlines" />
    </div>
  )
}
