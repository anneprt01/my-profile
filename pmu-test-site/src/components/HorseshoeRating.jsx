import Horseshoe from './icons/Horseshoe.jsx'

// Note sur 5 affichée en fers à cheval. `value` peut être décimal (moyenne
// des 4 critères) : on arrondit à l'entier le plus proche pour l'affichage
// des icônes, et on montre le chiffre exact à côté.
export default function HorseshoeRating({ value, size = 18, showValue = true }) {
  if (value === null || value === undefined) {
    return <span className="horseshoe-rating horseshoe-rating--empty">— pas encore testé —</span>
  }

  const rounded = Math.round(value)

  return (
    <span className="horseshoe-rating" title={`${value} / 5 fers à cheval`}>
      <span className="horseshoe-rating__icons">
        {Array.from({ length: 5 }, (_, i) => (
          <Horseshoe key={i} filled={i < rounded} size={size} />
        ))}
      </span>
      {showValue && <span className="horseshoe-rating__value">{value}/5</span>}
    </span>
  )
}
