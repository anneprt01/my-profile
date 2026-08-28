import { useMemo, useState } from 'react'
import ArcadeBackground from './components/ArcadeBackground.jsx'
import Header from './components/Header.jsx'
import PmuList from './components/PmuList.jsx'
import ParisVectorMap from './components/ParisVectorMap.jsx'
import PmuDetail from './components/PmuDetail.jsx'
import RainEffect from './components/RainEffect.jsx'
import SoundToggle from './components/SoundToggle.jsx'
import pmusSeed from './data/pmus.json'
import { isTeste } from './utils/notes.js'
import { playVictoryJingle } from './utils/jingle.js'
import './styles/theme.css'

const EFFECT_DURATION_MS = 1600
const SOUND_PREF_KEY = 'mpa-son-actif'

function loadSoundPref() {
  try {
    const stored = window.localStorage.getItem(SOUND_PREF_KEY)
    return stored === null ? true : stored === 'true'
  } catch {
    return true
  }
}

export default function App() {
  const [pmus] = useState(pmusSeed)
  const [activeTab, setActiveTab] = useState('liste')
  const [selectedPmu, setSelectedPmu] = useState(null)
  const [rainActive, setRainActive] = useState(false)
  const [soundOn, setSoundOn] = useState(loadSoundPref)

  const testedCount = useMemo(() => pmus.filter(isTeste).length, [pmus])

  function toggleSound() {
    setSoundOn((prev) => {
      const next = !prev
      try {
        window.localStorage.setItem(SOUND_PREF_KEY, String(next))
      } catch {
        // localStorage indisponible (navigation privée, etc.) : tant pis, le choix ne survivra pas au refresh.
      }
      return next
    })
  }

  function handleSelect(pmu) {
    setSelectedPmu(pmu)

    if (isTeste(pmu)) {
      if (soundOn) playVictoryJingle()
      setRainActive(true)
      setTimeout(() => setRainActive(false), EFFECT_DURATION_MS)
    }
  }

  return (
    <div className="app">
      <ArcadeBackground />
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
          <ParisVectorMap pmus={pmus} onSelect={handleSelect} />
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
      <SoundToggle enabled={soundOn} onToggle={toggleSound} />
    </div>
  )
}
