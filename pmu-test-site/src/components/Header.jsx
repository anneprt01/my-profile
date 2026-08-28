import Mascot from './Mascot.jsx'

const TABS = [
  { key: 'liste', label: 'Le classement' },
  { key: 'carte', label: 'La carte' },
]

export default function Header({ activeTab, onChangeTab, testedCount, totalCount }) {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <Mascot size={100} />
        <div className="site-header__titles">
          <h1 className="site-header__title">
            Le Grand Tour des <span className="text-neon-red">PMU</span>
          </h1>
          <p className="site-header__subtitle">
            Deux potes, une mission sacrée : goûter le café (ou le rouge) de
            tous les PMU de Paris et les noter en fers à cheval. Sérieux comme
            un tiercé, fiable comme un pronostic de comptoir.
          </p>
          <p className="site-header__counter">
            {testedCount} / {totalCount} PMU déjà infiltrés
          </p>
        </div>
      </div>

      <nav className="site-header__nav">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`nav-tab ${activeTab === tab.key ? 'is-active' : ''}`}
            onClick={() => onChangeTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
