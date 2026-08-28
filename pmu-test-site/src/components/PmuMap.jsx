import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HorseshoeRating from './HorseshoeRating.jsx'
import { createHorseshoeIcon } from '../utils/leafletIcons.js'
import { computeNoteGlobale, isTeste } from '../utils/notes.js'

const PARIS_CENTER = [48.8566, 2.3522]

export default function PmuMap({ pmus, onSelect }) {
  return (
    <section className="pmu-map">
      <div className="pmu-map__frame">
        <MapContainer
          center={PARIS_CENTER}
          zoom={12}
          scrollWheelZoom
          className="pmu-map__leaflet"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="pmu-map__tiles"
          />
          {pmus.map((pmu) => {
            const teste = isTeste(pmu)
            const note = computeNoteGlobale(pmu.notes)
            return (
              <Marker
                key={pmu.id}
                position={[pmu.lat, pmu.lng]}
                icon={createHorseshoeIcon(teste)}
                eventHandlers={teste ? { click: () => onSelect(pmu) } : {}}
              >
                <Popup>
                  <strong>{pmu.nom}</strong>
                  <br />
                  {pmu.adresse}
                  <br />
                  {teste ? (
                    <HorseshoeRating value={note} size={14} />
                  ) : (
                    <em>Pas encore testé — un jour, les gars, un jour.</em>
                  )}
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </div>
      <p className="pmu-map__legende">
        <span className="legende-item">
          <span className="legende-swatch legende-swatch--or" /> testé
        </span>
        <span className="legende-item">
          <span className="legende-swatch legende-swatch--terne" /> pas encore testé
        </span>
      </p>
    </section>
  )
}
