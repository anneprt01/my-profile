import HorseshoeRating from './HorseshoeRating.jsx'
import StatusPill from './StatusPill.jsx'
import { computeNoteGlobale, isTeste } from '../utils/notes.js'

export default function PmuCard({ pmu, onClick }) {
  const teste = isTeste(pmu)
  const note = computeNoteGlobale(pmu.notes)

  return (
    <button
      type="button"
      className={`pmu-card ${teste ? 'pmu-card--teste' : 'pmu-card--pas-teste'}`}
      onClick={() => onClick(pmu)}
    >
      <div className="pmu-card__info">
        <h3 className="pmu-card__nom">{pmu.nom}</h3>
        <p className="pmu-card__adresse">{pmu.adresse}</p>
        <HorseshoeRating value={note} size={15} showValue={false} />
      </div>
      <div className="pmu-card__right">
        <StatusPill teste={teste} />
        {teste && note !== null && (
          <span className="pmu-card__score">{note.toString().replace('.', ',')}</span>
        )}
      </div>
    </button>
  )
}
