export default function SoundToggle({ enabled, onToggle }) {
  return (
    <button
      type="button"
      className="sound-toggle"
      onClick={onToggle}
      aria-pressed={enabled}
      title={enabled ? 'Couper le jingle' : 'Réactiver le jingle'}
    >
      {enabled ? '🔊 Son : ON' : '🔇 Son : OFF'}
    </button>
  )
}
