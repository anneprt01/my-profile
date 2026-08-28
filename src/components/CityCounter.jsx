import EiffelTower from "./icons/EiffelTower";
import "./CityCounter.css";

export default function CityCounter({ city, tested, total }) {
  return (
    <div className="city-counter">
      <div className="city-counter__city">
        <EiffelTower size={18} />
        <span>{city.toUpperCase()}</span>
      </div>
      <div className="city-counter__figure">
        <span className="city-counter__num">{String(tested).padStart(2, "0")}</span>
        <span className="city-counter__slash">/</span>
        <span className="city-counter__num">{total}</span>
      </div>
      <div className="city-counter__label">PMU INFILTRÉS</div>
    </div>
  );
}
