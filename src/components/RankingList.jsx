import RankingCard from "./RankingCard";
import BarChart from "./icons/BarChart";
import "./RankingList.css";

export default function RankingList({ entries, selectedId, onSelect }) {
  return (
    <section className="ranking-panel" aria-labelledby="ranking-heading">
      <header className="ranking-panel__header">
        <h2 id="ranking-heading">
          <BarChart /> Classement des PMU parisiens
        </h2>
        <span className="ranking-panel__sort">TRI : NOTE GLOBALE ▾</span>
      </header>
      <ul className="ranking-panel__list">
        {entries.map((entry) => (
          <RankingCard key={entry.id} entry={entry} isSelected={entry.id === selectedId} onSelect={onSelect} />
        ))}
      </ul>
    </section>
  );
}
