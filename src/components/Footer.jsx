import { useLang } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="px-4 pb-24 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-mac-surface/80 backdrop-blur-sm rounded-2xl border border-mac-border/50 overflow-hidden">
          <div className="px-4 md:px-6 py-4 md:py-5 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 mb-2 text-[10px] md:text-xs text-mac-text-dim/70">
              <span className="text-mac-green font-mono">$</span>
              <span>{t('footer.built')}</span>
              <span className="text-mac-accent font-semibold">React</span>
              <span className="hidden sm:inline">&</span>
              <span className="text-mac-mauve font-semibold">Tailwind CSS</span>
              <span className="text-mac-text-dim/30 hidden md:inline">|</span>
              <span className="hidden md:inline">macOS Theme</span>
              <span className="text-mac-text-dim/30 hidden md:inline">|</span>
              <span className="text-mac-text-dim/40 hidden md:inline">
                &copy; {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-mac-text-dim/40 text-[10px] md:text-xs">
              {t('footer.by')}{' '}
              <span className="text-mac-accent/80">Zidan Herlangga</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
