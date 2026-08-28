import Crown from "./icons/Crown";
import Skull from "./icons/Skull";
import Horseshoe from "./icons/Horseshoe";
import "./RankingCard.css";

function HorseshoeRow({ score }) {
  const shoes = [1, 2, 3, 4, 5];
  return (
    <div className="ranking-card__shoes" aria-hidden="true">
      {shoes.map((n) => (
        <Horseshoe key={n} size={14} state={score != null && n <= Math.round(score) ? "filled" : "empty"} />
      ))}
    </div>
  );
}

export default function RankingCard({ entry, isSelected, onSelect }) {
  const { rank, name, address, tested, globalScore, hasPhoto } = entry;

  return (
    <li>
      <button
        type="button"
        className={`ranking-card ${isSelected ? "is-selected" : ""} ${!tested ? "is-untested" : ""}`}
        onClick={() => onSelect(entry.id)}
        aria-pressed={isSelected}
      >
        <div className="ranking-card__rank">
          {rank === 1 ? <Crown /> : rank ? <span className="ranking-card__rank-num">#{String(rank).padStart(2, "0")}</span> : <span className="ranking-card__rank-num ranking-card__rank-num--unknown">???</span>}
        </div>

        <div className="ranking-card__avatar" aria-hidden="true">
          {hasPhoto ? <span className="ranking-card__avatar-fill" /> : <span className="ranking-card__avatar-q">?</span>}
        </div>

        <div className="ranking-card__identity">
          <p className="ranking-card__name">{name}</p>
          <p className="ranking-card__address">{address}</p>
        </div>

        <span className={`status-pill ${tested ? "status-pill--tested" : "status-pill--untested"}`}>
          {tested ? <Skull size={12} /> : null}
          {tested ? "INFILTRÉ" : "PAS ENCORE INFILTRÉ"}
        </span>

        <div className="ranking-card__score">
          <HorseshoeRow score={globalScore} />
          <span className="ranking-card__score-num">{globalScore != null ? globalScore.toFixed(1) : "–"}<span className="ranking-card__score-den">/5</span></span>
        </div>
      </button>
    </li>
  );
}
