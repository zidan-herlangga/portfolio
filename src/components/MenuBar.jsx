import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LanguageContext'

const navItems = [
  { id: 'beranda', labelKey: 'menu.beranda' },
  { id: 'tentang', labelKey: 'menu.tentang' },
  { id: 'keahlian', labelKey: 'menu.keahlian' },
  { id: 'proyek', labelKey: 'menu.proyek' },
  { id: 'kontak', labelKey: 'menu.kontak' },
]

export default function MenuBar() {
  const { t, lang, setLang } = useLang()
  const [time, setTime] = useState(new Date())
  const [activeMenu, setActiveMenu] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const formatTime = (d) =>
    d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })

  const formatDate = (d) =>
    d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })

  const scrollTo = (id) => {
    setActiveMenu(null)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-mac-bg/80 border-b transition-all duration-300 select-none ${
        scrolled ? 'border-mac-border/70 shadow-lg shadow-black/20' : 'border-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-8 px-4 md:px-6 text-xs text-mac-text-dim">
        <div className="flex items-center gap-0.5 md:gap-1">
          <div className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === 'apple' ? null : 'apple')}
              className="px-2 py-0.5 rounded hover:bg-mac-surface transition-colors"
              aria-label="Apple menu"
            >
              <svg viewBox="0 0 18 18" className="w-3.5 h-3.5 md:w-4 md:h-4 fill-mac-text" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 1.45c.7-.85 1.7-1.35 2.75-1.45.15 1.2-.35 2.4-1.05 3.2-.65.75-1.7 1.3-2.75 1.2-.15-1.1.35-2.3 1.05-2.95zM8.25 16.75c-.9 0-2.25-2.4-4.1-2.35-2.1.05-2.9 2.35-4.15 2.35-1.25 0-2.65-1.95-4.35-5.75C-5.3 6.3-3.8 2.45-1.7 2.45 0 2.45 1.15 3.7 2.05 3.7c.85 0 2.05-1.55 3.55-1.55.55 0 2.55.25 3.75 1.95-.1.05-2.25 1.3-2.2 3.95.05 3.2 2.85 4.35 2.9 4.35-.05.15-.45 1.55-1.5 3.05-.85 1.25-1.75 2.3-2.3 2.3z" transform="translate(4.5, 0.5) scale(0.6)"/>
              </svg>
            </button>
            {activeMenu === 'apple' && (
              <div
                className="absolute top-full left-0 mt-1 w-52 bg-mac-surface border border-mac-border rounded-lg shadow-2xl py-1 backdrop-blur-xl animate-scale-in"
                onClick={() => setActiveMenu(null)}
              >
                <button className="w-full text-left px-4 py-1.5 hover:bg-mac-accent/20 cursor-pointer text-mac-text text-xs" onClick={() => scrollTo('beranda')}>
                  {lang === 'id' ? 'Tentang Portfolio Ini' : 'About This Portfolio'}
                </button>
                <div className="h-px bg-mac-border my-1" />
                <div className="px-4 py-1.5 text-mac-text-dim text-xs cursor-default">
                  {lang === 'id' ? 'Preferences...' : 'Preferences...'}
                </div>
              </div>
            )}
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hidden sm:block px-2.5 py-0.5 rounded hover:bg-mac-surface transition-colors hover:text-mac-text"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={setLang}
            className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-mac-surface transition-colors text-mac-text-dim hover:text-mac-accent"
            title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
          >
            <span className={`text-xs ${lang === 'id' ? 'text-mac-accent font-semibold' : ''}`}>ID</span>
            <span className="text-mac-text-dim/30">/</span>
            <span className={`text-xs ${lang === 'en' ? 'text-mac-accent font-semibold' : ''}`}>EN</span>
          </button>

          <span className="hidden md:inline text-mac-text-dim/50">|</span>
          <span className="hidden md:inline text-mac-text-dim/60">{formatDate(time)}</span>

          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 fill-mac-text-dim/60" viewBox="0 0 16 16">
              <path d="M1 10l3-3h2l3 3M9 6l3-3h2l1 1"/>
            </svg>
            <svg className="w-3 h-3 fill-mac-text-dim/60" viewBox="0 0 16 16">
              <rect x="1" y="7" width="3" height="6" rx="0.5"/>
              <rect x="5" y="5" width="3" height="8" rx="0.5"/>
              <rect x="9" y="3" width="3" height="10" rx="0.5"/>
            </svg>
          </div>
          <span className="font-medium tracking-wide">{formatTime(time)}</span>
        </div>
      </div>
    </nav>
  )
}
