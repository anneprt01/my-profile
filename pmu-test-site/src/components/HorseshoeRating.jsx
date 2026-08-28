import Horseshoe from './icons/Horseshoe.jsx'

// Note sur 5 affichée en fers à cheval. `value` peut être décimal (moyenne
// des 4 critères) : on arrondit à l'entier le plus proche pour l'affichage
// des icônes, et on montre le chiffre exact à côté. La ligne de 5 fers à
// cheval reste toujours visible, y compris vide/grisée pour un PMU pas
// encore testé (value = null) — c'est le comportement validé dans le
// mockup, plutôt qu'un message texte à la place des icônes.
export default function HorseshoeRating({ value, size = 18, showValue = true }) {
  const rounded = value === null || value === undefined ? 0 : Math.round(value)

  return (
    <span
      className="horseshoe-rating"
      title={value === null || value === undefined ? 'Pas encore testé' : `${value} / 5 fers à cheval`}
    >
      <span className="horseshoe-rating__icons">
        {Array.from({ length: 5 }, (_, i) => (
          <Horseshoe key={i} filled={i < rounded} size={size} />
        ))}
      </span>
      {showValue && value !== null && value !== undefined && (
        <span className="horseshoe-rating__value">{value}/5</span>
      )}
    </span>
  )
}
