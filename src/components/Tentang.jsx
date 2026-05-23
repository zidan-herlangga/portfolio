import { useLang } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'

export default function Tentang() {
  const { t, lang } = useLang()
  const [sectionRef, inView] = useInView({ threshold: 0.1 })
  const [leftRef, leftIn] = useInView({ threshold: 0.2 })
  const [rightRef, rightIn] = useInView({ threshold: 0.2 })

  const infoItems = [
    { label: t('tentang.info_nama'), value: 'Zidan Herlangga' },
    { label: t('tentang.info_lokasi'), value: 'Bekasi, Indonesia' },
    { label: t('tentang.info_email'), value: 'zidanherlangga24@gmail.com' },
    { label: t('tentang.info_status'), value: t('tentang.freelance') },
  ]

  const highlights = [
    { icon: '🎓', title: t('tentang.edu'), desc: t('tentang.edu_desc') },
    { icon: '💼', title: t('tentang.exp'), desc: t('tentang.exp_desc') },
    { icon: '🚀', title: t('tentang.proj'), desc: t('tentang.proj_desc') },
    { icon: '🌐', title: t('tentang.remote'), desc: t('tentang.remote_desc') },
  ]

  const timeline = [
    { year: t('tentang.year1'), title: t('tentang.title1'), desc: t('tentang.desc1') },
    { year: t('tentang.year2'), title: t('tentang.title2'), desc: t('tentang.desc2') },
    { year: t('tentang.year3'), title: t('tentang.title3'), desc: t('tentang.desc3') },
    { year: t('tentang.year4'), title: t('tentang.title4'), desc: t('tentang.desc4') },
  ]

  return (
    <section id="tentang" className="relative min-h-screen flex items-center py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-60 h-60 bg-mac-sapphire/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div
        ref={sectionRef}
        className={`max-w-4xl w-full mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-mac-surface/90 backdrop-blur-sm rounded-2xl border border-mac-border/60 overflow-hidden shadow-2xl shadow-black/20">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-mac-bg/60 border-b border-mac-border/50">
            <div className="w-3 h-3 rounded-full bg-mac-red transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-yellow transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-green transition-transform hover:scale-110 cursor-pointer" />
            <div className="ml-3 text-mac-text-dim/50 text-[10px] md:text-xs">tentang.sh — bash</div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-6">
              <p className="text-mac-green text-xs md:text-sm mb-1 font-mono">
                <span className="text-mac-text-dim">~ </span>
                <span className="text-mac-accent">{t('tentang.terminal')}</span>
              </p>
              <p className="text-mac-text-dim/40 text-[10px] md:text-xs">────────────────</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div
                ref={leftRef}
                className={`transition-all duration-600 ${
                  leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                <h2 className="text-lg md:text-xl font-bold font-sans text-mac-text mb-4 flex items-center gap-2">
                  <span className="text-mac-accent">{'//'}</span> {t('tentang.title')}
                </h2>
                <div className="space-y-3 text-xs md:text-sm text-mac-text-dim/80 leading-relaxed">
                  <p className="bg-mac-bg/30 p-3 md:p-4 rounded-lg border border-mac-border/20">
                    {t('tentang.p1')} <span className="text-mac-accent font-semibold">Zidan Herlangga</span>, {t('tentang.p1b')}{' '}
                    <span className="text-mac-sapphire">{Array.isArray(t('beranda.roles')) ? t('beranda.roles')[0] : 'Web Developer'}</span>{' '}
                    {t('tentang.p1c')}
                  </p>
                  <p>
                    {t('tentang.p2')}{' '}
                    <span className="text-mac-yellow">React</span>,{' '}
                    <span className="text-mac-yellow">Vue.js</span>,{' '}
                    <span className="text-mac-yellow">Laravel</span>,{' '}
                    <span className="text-mac-yellow">Python</span>
                    {lang === 'id' ? ', dan berbagai teknologi terkini. Setiap proyek adalah kesempatan untuk belajar dan berkembang.' : ', and various modern technologies. Every project is an opportunity to learn and grow.'}
                  </p>
                  <p className="bg-mac-bg/30 p-3 md:p-4 rounded-lg border border-mac-border/20 border-l-2 border-l-mac-accent/50">
                    <span className="text-mac-green">$</span> {t('tentang.p3')}{' '}
                    <span className="text-mac-peach">{t('tentang.freelance')}</span>.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {infoItems.map((item) => (
                    <div key={item.label} className="bg-mac-bg/50 rounded-lg p-3 border border-mac-border/30 hover:border-mac-accent/30 transition-colors">
                      <p className="text-mac-text-dim/60 text-[10px]">{item.label}</p>
                      <p className="text-mac-text text-xs md:text-sm font-medium truncate">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                ref={rightRef}
                className={`transition-all duration-600 ${
                  rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
              >
                <h2 className="text-lg md:text-xl font-bold font-sans text-mac-text mb-4 flex items-center gap-2">
                  <span className="text-mac-accent">{'//'}</span> {t('tentang.highlights')}
                </h2>
                <div className="space-y-2 md:space-y-3">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 bg-mac-bg/30 rounded-lg p-3 md:p-4 border border-mac-border/30 hover:border-mac-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span className="text-lg md:text-xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-mac-text text-xs md:text-sm font-medium">{item.title}</p>
                        <p className="text-mac-text-dim/60 text-[10px] md:text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-sm md:text-base font-bold font-sans text-mac-text mb-3 flex items-center gap-2">
                    <span className="text-mac-yellow">⏳</span> {t('tentang.timeline')}
                  </h3>
                  <div className="relative pl-4 border-l-2 border-mac-border/50 space-y-4">
                    {timeline.map((item) => (
                      <div key={item.year} className="relative group">
                        <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-mac-accent/80 group-hover:bg-mac-accent transition-colors ring-2 ring-mac-bg" />
                        <div className="bg-mac-bg/40 rounded-lg p-3 border border-mac-border/20 group-hover:border-mac-accent/30 transition-all">
                          <p className="text-mac-accent text-[10px] font-bold">{item.year}</p>
                          <p className="text-mac-text text-xs font-medium">{item.title}</p>
                          <p className="text-mac-text-dim/60 text-[10px]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-mac-bg/40 rounded-lg p-3 md:p-4 border border-mac-border/30">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-mac-text-dim">
                <span className="text-mac-green">$</span>
                <span className="text-mac-accent">{t('tentang.motto_cmd')}</span>
              </div>
              <p className="text-mac-text text-xs md:text-sm italic mt-1 pl-4 border-l-2 border-mac-accent/40">
                {t('tentang.motto')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
