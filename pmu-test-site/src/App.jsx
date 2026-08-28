import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import PmuList from './components/PmuList.jsx'
import PmuMap from './components/PmuMap.jsx'
import PmuDetail from './components/PmuDetail.jsx'
import RainEffect from './components/RainEffect.jsx'
import pmusSeed from './data/pmus.json'
import { isTeste } from './utils/notes.js'
import { playVictoryJingle } from './utils/jingle.js'
import './styles/theme.css'

const EFFECT_DURATION_MS = 1600

export default function App() {
  const [pmus] = useState(pmusSeed)
  const [activeTab, setActiveTab] = useState('liste')
  const [selectedPmu, setSelectedPmu] = useState(null)
  const [rainActive, setRainActive] = useState(false)

  const testedCount = useMemo(() => pmus.filter(isTeste).length, [pmus])

  function handleSelect(pmu) {
    setSelectedPmu(pmu)

    if (isTeste(pmu)) {
      playVictoryJingle()
      setRainActive(true)
      setTimeout(() => setRainActive(false), EFFECT_DURATION_MS)
    }
  }

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        testedCount={testedCount}
        totalCount={pmus.length}
      />

      <main className="app__main">
        {activeTab === 'liste' ? (
          <PmuList pmus={pmus} onSelect={handleSelect} />
        ) : (
          <PmuMap pmus={pmus} onSelect={handleSelect} />
        )}
      </main>

      <footer className="app__footer">
        <p>
          Fait avec amour, mauvaise foi et beaucoup de fers à cheval par deux
          fondateurs qui n'avaient clairement rien de mieux à faire un
          dimanche.
        </p>
      </footer>

      <PmuDetail pmu={selectedPmu} onClose={() => setSelectedPmu(null)} />
      <RainEffect active={rainActive} />
    </div>
  )
}
