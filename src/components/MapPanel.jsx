import Horseshoe from "./icons/Horseshoe";
import Skull from "./icons/Skull";
import MapPin from "./icons/MapPin";
import "./MapPanel.css";

function DetailHorseshoeRow({ score }) {
  return (
    <div className="detail-panel__shoes" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Horseshoe key={n} size={13} state={n <= score ? "filled" : "empty"} />
      ))}
    </div>
  );
}

export default function MapPanel({ detail }) {
  return (
    <section className="map-panel" aria-labelledby="map-heading">
      <header className="map-panel__header">
        <h2 id="map-heading">
          <MapPin size={14} /> Carte des PMU parisiens
        </h2>
        <span className="map-panel__filters">FILTRES ▾</span>
      </header>

      <div className="map-panel__body">
        <div className="map-panel__canvas" role="img" aria-label="Carte de Paris — sera construite à partir de arrondissements.json à l'Étape 3">
          <span className="map-panel__canvas-note">CARTE SVG — arrondissements.json (Étape 3)</span>
          <div className="map-panel__legend">
            <span><Horseshoe size={12} state="filled" /> Infiltré</span>
            <span><Horseshoe size={12} state="empty" /> Pas encore infiltré</span>
          </div>
        </div>

        {detail && (
          <aside className="detail-panel" aria-labelledby="detail-heading">
            <h3 id="detail-heading">{detail.name.toUpperCase()}</h3>
            <p className="detail-panel__location"><MapPin size={12} /> {detail.arrondissement}</p>
            {detail.tested && (
              <span className="status-pill status-pill--tested">
                <Skull size={12} /> INFILTRÉ
              </span>
            )}
            <div className="detail-panel__photo">
              <span>PHOTO DE VISITE</span>
            </div>
            <dl className="detail-panel__criteria">
              {detail.criteria.map((c) => (
                <div key={c.label} className="detail-panel__criterion">
                  <dt>{c.label.toUpperCase()}</dt>
                  <dd><DetailHorseshoeRow score={c.score} /></dd>
                </div>
              ))}
            </dl>
            <div className="detail-panel__global">
              <span>NOTE GLOBALE</span>
              <strong>{detail.globalScore.toFixed(1)} <em>/5</em></strong>
            </div>
            <button type="button" className="detail-panel__cta">VOIR LA FICHE COMPLÈTE ▸</button>
          </aside>
        )}
      </div>
    </section>
  );
}
