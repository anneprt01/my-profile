import { useEffect } from 'react'
import SafeImage from './SafeImage.jsx'
import HorseshoeRating from './HorseshoeRating.jsx'
import { CRITERES } from '../data/criteres.js'
import { computeNoteGlobale, isTeste } from '../utils/notes.js'

export default function PmuDetail({ pmu, onClose }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!pmu) return null

  const teste = isTeste(pmu)
  const noteGlobale = computeNoteGlobale(pmu.notes)

  return (
    <div className="pmu-detail-overlay" onClick={onClose}>
      <div
        className="pmu-detail"
        role="dialog"
        aria-modal="true"
        aria-label={`Fiche de ${pmu.nom}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pmu-detail__close" onClick={onClose}>
          ✕
        </button>

        <div className="pmu-detail__photo">
          <SafeImage
            src={pmu.photoFiche}
            alt={`Les deux fondateurs en mission au ${pmu.nom}`}
            fallback="📸 photo à venir"
          />
        </div>

        <h2 className="pmu-detail__nom">{pmu.nom}</h2>
        <p className="pmu-detail__adresse">{pmu.adresse}</p>

        <div className="pmu-detail__note-globale">
          <HorseshoeRating value={noteGlobale} size={26} />
        </div>

        {teste ? (
          <ul className="pmu-detail__criteres">
            {CRITERES.map((critere) => (
              <li key={critere.key} className="pmu-detail__critere">
                <div className="pmu-detail__critere-label">
                  <span>{critere.label}</span>
                  <span className="pmu-detail__critere-desc">{critere.description}</span>
                </div>
                <HorseshoeRating value={pmu.notes?.[critere.key] ?? null} size={16} showValue={false} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="pmu-detail__pas-teste">
            Ce PMU n'a pas encore reçu la visite officielle des fondateurs.
            Patience, camarade turfiste.
          </p>
        )}

        {pmu.commentaire && (
          <blockquote className="pmu-detail__commentaire">“{pmu.commentaire}”</blockquote>
        )}
      </div>
    </div>
  )
}
