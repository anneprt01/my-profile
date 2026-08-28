import { useState } from "react";
import Trophy from "./icons/Trophy";
import MapPin from "./icons/MapPin";
import Mascot from "./Mascot";
import MusicNote from "./icons/MusicNote";
import "./TabsBar.css";

const TABS = [
  { id: "classement", label: "Le classement", icon: Trophy },
  { id: "carte", label: "La carte", icon: MapPin },
];

export default function TabsBar({ activeTab, onChange }) {
  return (
    <nav className="tabs-bar" aria-label="Navigation principale">
      <div className="tabs-bar__tabs" role="tablist">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            className={`tab tab--${id} ${activeTab === id ? "is-active" : ""}`}
            onClick={() => onChange(id)}
          >
            <Icon size={16} />
            <span>{label.toUpperCase()}</span>
          </button>
        ))}
      </div>

      <div className="survey-badge">
        <div className="survey-badge__mascot">
          <Mascot variant="horse-head" alt="" compact />
        </div>
        <span className="survey-badge__text">ENQUÊTE DE COMPTOIR EN COURS...</span>
      </div>

      <div className="sound-hint" aria-hidden="true">
        <div className="sound-hint__mascot">
          <Mascot variant="horse-head" alt="" compact />
        </div>
        <MusicNote size={12} />
      </div>
    </nav>
  );
}

export function useTabs(initial = "classement") {
  return useState(initial);
}
