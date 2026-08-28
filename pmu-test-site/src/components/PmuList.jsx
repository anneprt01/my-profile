import { useMemo, useState } from 'react'
import PmuCard from './PmuCard.jsx'
import TipBanner from './TipBanner.jsx'
import { computeNoteGlobale, isTeste } from '../utils/notes.js'

const SORTS = {
  NOTE_DESC: 'note_desc',
  ALPHA: 'alpha',
}

export default function PmuList({ pmus, onSelect }) {
  const [sort, setSort] = useState(SORTS.NOTE_DESC)

  const sorted = useMemo(() => {
    const copy = [...pmus]
    if (sort === SORTS.ALPHA) {
      return copy.sort((a, b) => a.nom.localeCompare(b.nom))
    }
    // Note globale décroissante ; les PMU pas encore testés ferment la marche.
    return copy.sort((a, b) => {
      const testeA = isTeste(a)
      const testeB = isTeste(b)
      if (testeA !== testeB) return testeA ? -1 : 1
      const noteA = computeNoteGlobale(a.notes) ?? -1
      const noteB = computeNoteGlobale(b.notes) ?? -1
      return noteB - noteA
    })
  }, [pmus, sort])

  const showRank = sort === SORTS.NOTE_DESC

  const ranked = useMemo(() => {
    return sorted.reduce((acc, pmu) => {
      const previousRank = acc.length > 0 ? acc[acc.length - 1].rank : 0
      const rank = isTeste(pmu) ? previousRank + 1 : previousRank
      return [...acc, { pmu, rank }]
    }, [])
  }, [sorted])

  return (
    <section className="pmu-list">
      <div className="pmu-list__toolbar">
        <label htmlFor="sort-select">Trier par</label>
        <select
          id="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value={SORTS.NOTE_DESC}>Meilleure note d'abord</option>
          <option value={SORTS.ALPHA}>Ordre alphabétique</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <p className="pmu-list__empty">
          Aucun PMU dans la base. Les fondateurs sont en pause déjeuner.
        </p>
      ) : (
        <div className="pmu-list__items">
          {ranked.map(({ pmu, rank }) => (
            <PmuCard
              key={pmu.id}
              pmu={pmu}
              onClick={onSelect}
              rank={rank}
              showRank={showRank}
            />
          ))}
        </div>
      )}

      <TipBanner />
    </section>
  )
}
