import { useRef, useState } from 'react'
import Horseshoe from './icons/Horseshoe.jsx'
import {
  PARIS_OUTLINE,
  ARRONDISSEMENT_LABELS,
} from '../data/parisOutline.js'
import {
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  project,
  projectLatLng,
  pointsToPath,
} from '../utils/parisProjection.js'
import { isTeste } from '../utils/notes.js'

const OUTLINE_PATH = pointsToPath(PARIS_OUTLINE.map(project))
const MIN_ZOOM = 1
const MAX_ZOOM = 3.5

export default function ParisVectorMap({ pmus, onSelect }) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragState = useRef(null)

  function clampZoom(z) {
    return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z))
  }

  function handleWheel(e) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.15 : 0.15
    setZoom((z) => clampZoom(z + delta))
  }

  function handlePointerDown(e) {
    // Ne pas capturer le pointeur quand on clique sur un marqueur : la
    // capture redirige la synthèse du "click" vers le <svg>, ce qui casse
    // l'ouverture de la fiche au clic sur un fer à cheval.
    if (e.target.closest('.pmu-map__marker')) return
    dragState.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e) {
    if (!dragState.current) return
    const dx = e.clientX - dragState.current.startX
    const dy = e.clientY - dragState.current.startY
    setPan({ x: dragState.current.panX + dx, y: dragState.current.panY + dy })
  }

  function handlePointerUp() {
    dragState.current = null
  }

  function recenter() {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const cx = VIEWBOX_WIDTH / 2
  const cy = VIEWBOX_HEIGHT / 2
  const transform = `translate(${pan.x} ${pan.y}) translate(${cx} ${cy}) scale(${zoom}) translate(${-cx} ${-cy})`

  return (
    <section className="pmu-map">
      <div className="pmu-map__frame">
        <div className="pmu-map__controls">
          <button type="button" onClick={() => setZoom((z) => clampZoom(z + 0.4))} aria-label="Zoomer">
            +
          </button>
          <button type="button" onClick={() => setZoom((z) => clampZoom(z - 0.4))} aria-label="Dézoomer">
            −
          </button>
          <button type="button" onClick={recenter} aria-label="Recentrer" className="pmu-map__recenter">
            ⟲
          </button>
        </div>

        <svg
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          className="pmu-map__svg"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <g transform={transform}>
            <path className="pmu-map__outline" d={OUTLINE_PATH} />

            {ARRONDISSEMENT_LABELS.map((a) => {
              const [x, y] = projectLatLng(a.lat, a.lng)
              return (
                <text key={a.num} x={x} y={y} className="pmu-map__arr-label">
                  {a.num}e
                </text>
              )
            })}

            {pmus.map((pmu) => {
              const teste = isTeste(pmu)
              const [x, y] = projectLatLng(pmu.lat, pmu.lng)
              return (
                <g
                  key={pmu.id}
                  transform={`translate(${x - 12} ${y - 24})`}
                  className={`pmu-map__marker ${teste ? 'is-teste' : 'is-pas-teste'}`}
                  onClick={() => onSelect(pmu)}
                  role="button"
                  tabIndex={0}
                  aria-label={pmu.nom}
                >
                  <circle cx={12} cy={12} r={16} fill="transparent" />
                  <Horseshoe filled={teste} size={24} />
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <p className="pmu-map__legende">
        <span className="legende-item">
          <span className="legende-swatch legende-swatch--or" /> infiltré
        </span>
        <span className="legende-item">
          <span className="legende-swatch legende-swatch--terne" /> pas encore infiltré
        </span>
      </p>
    </section>
  )
}
