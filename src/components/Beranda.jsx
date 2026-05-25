import { useEffect, useState } from 'react';
import { useLang } from '../contexts/LanguageContext';
import useInView from '../hooks/useInView';
import profileImage from '../assets/zidanherlangga.jpg';

function TerminalText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {!done && <span className="animate-pulse text-mac-green">|</span>}
    </span>
  );
}

export default function Beranda() {
  const { t, lang } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const roles = t('beranda.roles');

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-8 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-mac-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-mac-mauve/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mac-sapphire/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div
        ref={sectionRef}
        className={`max-w-4xl w-full transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-mac-surface/90 backdrop-blur-sm rounded-2xl border border-mac-border/60 overflow-hidden shadow-2xl shadow-black/30 animate-glow">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-mac-bg/60 border-b border-mac-border/50">
            <div className="w-3 h-3 rounded-full bg-mac-red transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-yellow transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-green transition-transform hover:scale-110 cursor-pointer" />
            <div className="ml-3 flex items-center gap-2 text-mac-text-dim/50 text-[10px] md:text-xs">
              <span className="px-1.5 py-0.5 bg-mac-bg/60 rounded text-mac-green">
                zsh
              </span>
              <span className="hidden sm:inline">~/zidan-portfolio</span>
              <span className="hidden md:inline text-mac-text-dim/30">
                — 80×24
              </span>
            </div>
            <div className="ml-auto flex items-center gap-1 text-[10px] md:text-xs text-mac-text-dim/40">
              <div className="w-1.5 h-1.5 rounded-full bg-mac-green animate-pulse" />
              <span className="hidden sm:inline">
                {lang === 'id' ? 'online' : 'online'}
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            <div className="mb-4 md:mb-6">
              <p className="text-mac-green text-xs md:text-sm mb-1 font-mono">
                <span className="text-mac-text-dim">~ </span>
                <span className="text-mac-accent">{t('beranda.terminal')}</span>
              </p>
              <p className="text-mac-text-dim/40 text-[10px] md:text-xs">
                ────────────────
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="relative shrink-0 animate-fade-in-up stagger-1">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-mac-accent via-mac-mauve to-mac-pink p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-mac-bg flex items-center justify-center overflow-hidden border-2 border-mac-bg relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-mac-accent/20 to-mac-mauve/20 rounded-full" />
                    <img
                      src={profileImage}
                      alt="Zidan Herlangga"
                      className="w-full h-full object-cover rounded-full relative z-10"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-mac-accent/30 transition-all duration-500" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-mac-green text-mac-bg text-[10px] md:text-xs font-bold px-2 md:px-2.5 py-0.5 md:py-1 rounded-full shadow-lg shadow-mac-green/30 animate-fade-in-up stagger-3">
                  AVAILABLE
                </div>
                <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 bg-mac-surface rounded-full border border-mac-border/50 flex items-center justify-center text-xs md:text-sm animate-fade-in-up stagger-2">
                  🖐️
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="mb-2 text-mac-text-dim text-[10px] md:text-xs font-mono animate-fade-in-up stagger-2">
                  <span className="text-mac-green">➜</span>{' '}
                  <span className="text-mac-accent">~/zidan</span>{' '}
                  <span className="text-mac-text-dim">on</span>{' '}
                  <span className="text-mac-yellow">🌱 main</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-mac-text mb-1 animate-fade-in-up stagger-3">
                  {t('beranda.greeting')}{' '}
                  <span className="bg-gradient-to-r from-mac-accent via-mac-sapphire to-mac-mauve bg-clip-text text-transparent animate-gradient">
                    Zidan Herlangga
                  </span>
                </h1>

                <div className="h-8 md:h-10 flex items-center justify-center md:justify-start mb-2 animate-fade-in-up stagger-4">
                  <span className="text-mac-text-dim/60 text-xs mr-2 font-mono hidden sm:inline">
                    $
                  </span>
                  <span className="bg-mac-accent/10 text-mac-accent px-2 md:px-3 py-1 rounded-md text-xs md:text-sm font-mono border border-mac-accent/20 transition-all duration-500">
                    {Array.isArray(roles) ? roles[roleIndex] : roles}
                  </span>
                </div>

                <p className="text-mac-text-dim/70 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in-up stagger-5">
                  <TerminalText
                    text={
                      typeof roles === 'string'
                        ? t('beranda.desc')
                        : t('beranda.desc')
                    }
                    delay={0.5}
                  />
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-5 md:mt-6 justify-center md:justify-start animate-fade-in-up stagger-6">
                  <a
                    href="#proyek"
                    className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-mac-accent text-mac-bg rounded-lg hover:bg-mac-accent/90 hover:shadow-xl hover:shadow-mac-accent/30 transition-all duration-300 text-xs md:text-sm font-medium active:scale-95"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    {t('beranda.btn_proyek')}
                  </a>
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-mac-border rounded-lg hover:bg-mac-surface hover:border-mac-accent/40 transition-all duration-300 text-xs md:text-sm active:scale-95"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {t('beranda.btn_kontak')}
                  </a>
                  <button
                    onClick={() =>
                      window.open(
                        'https://github.com/zidan-herlangga',
                        '_blank',
                      )
                    }
                    className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 border border-mac-border rounded-lg hover:bg-mac-surface hover:border-mac-accent/40 transition-all duration-300 text-xs md:text-sm active:scale-95"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-mac-border/40 animate-fade-in-up stagger-7">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-[10px] md:text-xs text-mac-text-dim/60">
                <div className="flex items-center gap-2">
                  <span className="text-mac-green font-bold">$</span>
                  <span className="bg-mac-bg/50 px-2 py-0.5 rounded text-mac-text-dim/50 font-mono">
                    ./status.sh
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-mac-green animate-pulse" />
                    <span className="text-mac-green/80">
                      {t('beranda.status')}
                    </span>
                  </span>
                  <span className="text-mac-text-dim/30 hidden sm:inline">
                    |
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-mac-yellow">⚡</span>
                    <span className="text-mac-text-dim/50">
                      {lang === 'id' ? 'Freelance' : 'Freelance'}
                    </span>
                  </span>
                  <span className="text-mac-text-dim/30 hidden sm:inline">
                    |
                  </span>
                  <span className="text-mac-text-dim/50">
                    📍 {t('beranda.lokasi')}
                  </span>
                  <span className="text-mac-text-dim/30 hidden md:inline">
                    |
                  </span>
                  <span className="text-mac-text-dim/50 hidden md:inline">
                    🌐 {t('beranda.remote')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-mac-text-dim/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
