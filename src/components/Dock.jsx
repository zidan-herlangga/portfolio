import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LanguageContext'

const dockItems = [
  { id: 'beranda', icon: '🏠', labelKey: 'menu.beranda' },
  { id: 'tentang', icon: '👤', labelKey: 'menu.tentang' },
  { id: 'keahlian', icon: '💻', labelKey: 'menu.keahlian' },
  { id: 'proyek', icon: '📁', labelKey: 'menu.proyek' },
  { id: 'kontak', icon: '✉️', labelKey: 'menu.kontak' },
]

export default function Dock() {
  const [activeId, setActiveId] = useState('')
  const { t } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      const sections = dockItems.map((item) => document.getElementById(item.id))
      let current = ''
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200) current = section.id
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-3 pointer-events-none">
      <div className="pointer-events-auto flex items-end gap-1 bg-mac-bg/80 backdrop-blur-2xl border border-mac-border/50 rounded-2xl px-3 py-2 shadow-2xl">
        {dockItems.map((item, index) => (
          <div key={item.id} className="relative group flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-mac-surface border border-mac-border px-2.5 py-1 rounded-md text-xs text-mac-text whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
              {t(item.labelKey)}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-mac-surface border-r border-b border-mac-border rotate-45" />
            </div>
            <button
              onClick={() => scrollTo(item.id)}
              className={`w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-1 active:scale-95 ${
                activeId === item.id
                  ? 'bg-mac-accent/15 border border-mac-accent/30'
                  : 'hover:bg-mac-surface/80 border border-transparent'
              }`}
            >
              <span className={`text-lg md:text-xl ${activeId === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
            </button>
            {activeId === item.id && (
              <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-mac-accent" />
            )}
            {index < dockItems.length - 1 && (
              <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-px h-4 bg-mac-border/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
