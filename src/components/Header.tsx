interface HeaderProps {
  selectedTab: string
  onSelectTab: (tab: string) => void
}

export default function Header({ selectedTab, onSelectTab }: HeaderProps) {
  const tabs = ['home', 'projects', 'about', 'contact']

  return (
    <header className="site-header">
      <nav className="site-nav">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? 'active-tab' : ''}
            onClick={() => onSelectTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}
