import { useState } from "react";
import ArcadeBackdrop from "./components/ArcadeBackdrop";
import Header from "./components/Header";
import TabsBar from "./components/TabsBar";
import RankingList from "./components/RankingList";
import MapPanel from "./components/MapPanel";
import ArcadeFooter from "./components/ArcadeFooter";
import ReactionBubble from "./components/ReactionBubble";
import { DEMO_RANKING, DEMO_DETAIL, DEMO_COUNTER } from "./data/demoContent";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("classement");
  const [selectedId, setSelectedId] = useState(DEMO_RANKING[0].id);

  return (
    <div className="app">
      <ArcadeBackdrop />

      <div className="shell">
        <Header counter={DEMO_COUNTER} />
        <TabsBar activeTab={activeTab} onChange={setActiveTab} />

        <div className="shell__main">
          <ReactionBubble text="HOP HOP HOP ! ON INFILTRE !" className="shell__reaction" />

          <main className="shell__body">
            <RankingList entries={DEMO_RANKING} selectedId={selectedId} onSelect={setSelectedId} />
            <MapPanel detail={DEMO_DETAIL} />
          </main>
        </div>

        <ArcadeFooter />
      </div>
    </div>
  );
}
