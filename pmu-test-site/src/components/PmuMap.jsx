import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HorseshoeRating from './HorseshoeRating.jsx'
import StatusPill from './StatusPill.jsx'
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
                eventHandlers={{ click: () => onSelect(pmu) }}
              >
                <Popup className="pmu-popup">
                  <div className="pmu-popup__inner">
                    <h4 className="pmu-popup__nom">{pmu.nom}</h4>
                    <p className="pmu-popup__adresse">{pmu.adresse}</p>
                    <HorseshoeRating value={note} size={13} showValue={false} />
                    <div className="pmu-popup__footer">
                      <StatusPill teste={teste} />
                      {teste && note !== null && (
                        <span className="pmu-popup__score">{note.toString().replace('.', ',')}</span>
                      )}
                    </div>
                  </div>
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
