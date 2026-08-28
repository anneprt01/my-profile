// Jingle "victoire au tiercé" généré entièrement en code via Web Audio API.
//
// Volontairement PAS un fichier audio importé : le jingle placeholder fourni
// dans le brief était le son "1-up" de Super Mario (Nintendo), protégé par
// le droit d'auteur et donc inutilisable même en dev sur un dépôt public.
// Un jingle synthétisé évite le problème une bonne fois pour toutes (zéro
// asset audio à sourcer, zéro risque de droits) tout en gardant l'esprit
// rétro-arcade "power-up".
let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext
    audioCtx = new Ctx()
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

// Petit arpège ascendant chiptune, ~1.1s, pour saluer un clic sur un PMU testé.
export function playVictoryJingle() {
  const ctx = getAudioContext()
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51] // C5 E5 G5 C6 E6
  const noteDuration = 0.11
  const start = ctx.currentTime

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.value = freq

    const noteStart = start + i * noteDuration
    gain.gain.setValueAtTime(0, noteStart)
    gain.gain.linearRampToValueAtTime(0.18, noteStart + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDuration)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(noteStart)
    osc.stop(noteStart + noteDuration)
  })

  // Accord final tenu pour finir en fanfare.
  const chordStart = start + notes.length * noteDuration
  ;[1046.5, 1318.51, 1568.0].forEach((freq) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.001, chordStart)
    gain.gain.linearRampToValueAtTime(0.15, chordStart + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.001, chordStart + 0.6)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(chordStart)
    osc.stop(chordStart + 0.6)
  })
}
