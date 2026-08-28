import { CRITERES, STATUTS } from '../data/criteres.js'

export function computeNoteGlobale(notes) {
  if (!notes) return null
  const valeurs = CRITERES.map((c) => notes[c.key]).filter(
    (v) => typeof v === 'number',
  )
  if (valeurs.length === 0) return null
  const somme = valeurs.reduce((acc, v) => acc + v, 0)
  return Math.round((somme / valeurs.length) * 10) / 10
}

export function isTeste(pmu) {
  return pmu.statut === STATUTS.TESTE
}

export function sortByNoteGlobaleDesc(pmus) {
  return [...pmus].sort((a, b) => {
    const noteA = computeNoteGlobale(a.notes)
    const noteB = computeNoteGlobale(b.notes)
    if (noteA === null && noteB === null) return a.nom.localeCompare(b.nom)
    if (noteA === null) return 1
    if (noteB === null) return -1
    return noteB - noteA
  })
}
