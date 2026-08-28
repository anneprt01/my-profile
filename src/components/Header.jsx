import Mascot from "./Mascot";
import CityCounter from "./CityCounter";
import "./Header.css";

export default function Header({ counter }) {
  return (
    <header className="header">
      <div className="header__mascot">
        <Mascot variant="horse-run" alt="Le cheval jockey mascotte de Misé, Pesé, Approuvé" />
      </div>

      <div className="header__titleblock">
        <h1 className="logo">
          <span className="logo__word logo__word--mise">MISÉ</span>
          <span className="logo__sep">,</span>{" "}
          <span className="logo__word logo__word--pese">PESÉ</span>
          <span className="logo__sep">,</span>{" "}
          <span className="logo__word logo__word--approuve">APPROUVÉ</span>
        </h1>
        <p className="tagline">★ LE GRAND CLASSEMENT DES PMU DE FRANCE ★</p>
      </div>

      <CityCounter city="Paris" tested={counter.tested} total={counter.total} />
    </header>
  );
}
