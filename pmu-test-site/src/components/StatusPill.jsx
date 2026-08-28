// Badge de statut partagé entre les cartes de la liste et les popups de la
// carte : pilule pleine néon cyan + glow pour un PMU testé ("Infiltré"),
// pilule à contour discret pour un PMU pas encore testé.
export default function StatusPill({ teste }) {
  return (
    <span className={`pill ${teste ? 'pill--tested' : ''}`}>
      {teste ? 'Infiltré' : 'Pas encore infiltré'}
    </span>
  )
}
