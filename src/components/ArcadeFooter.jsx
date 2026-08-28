import { useState } from "react";
import Mascot from "./Mascot";
import Rainbow from "./icons/Rainbow";
import Speaker from "./icons/Speaker";
import "./ArcadeFooter.css";

export default function ArcadeFooter() {
  const [muted, setMuted] = useState(false);

  return (
    <footer className="arcade-footer">
      <div className="arcade-footer__bar">
        <div className="arcade-footer__head">
          <Mascot variant="horse-head" alt="" compact />
        </div>

        <p className="arcade-footer__message">
          Clic sur un PMU infiltré = pluie de têtes !
        </p>

        <div className="arcade-footer__rain">
          <Rainbow size={52} className="arcade-footer__rainbow" />
          <div className="arcade-footer__head arcade-footer__head--small arcade-footer__head--rain1">
            <Mascot variant="anne-head" alt="" compact />
          </div>
          <div className="arcade-footer__head arcade-footer__head--small arcade-footer__head--rain2">
            <Mascot variant="friend-head" alt="" compact />
          </div>
        </div>

        <button
          type="button"
          className="sound-toggle"
          onClick={() => setMuted((m) => !m)}
          aria-pressed={muted}
        >
          <Speaker muted={muted} size={16} />
          <span>SON : {muted ? "OFF" : "ON"}</span>
        </button>
      </div>

      <div className="arcade-footer__mascot2">
        <Mascot variant="horse-run" alt="" flip />
      </div>
    </footer>
  );
}
