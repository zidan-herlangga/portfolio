import { useLang } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'

const projects = [
  { id: 1, titleKey: 'proyek.title1', descKey: 'proyek.desc1', tech: ['Next.js', 'MDX', 'Tailwind', 'Supabase'], image: '📝', color: 'from-blue-500 to-cyan-500' },
  { id: 2, titleKey: 'proyek.title2', descKey: 'proyek.desc2', tech: ['React', 'Framer Motion', 'Firebase', 'Tailwind'], image: '💍', color: 'from-pink-500 to-rose-500' },
  { id: 3, titleKey: 'proyek.title3', descKey: 'proyek.desc3', tech: ['React', 'GSAP', 'Tailwind', 'Vite'], image: '🏢', color: 'from-violet-500 to-purple-500' },
  { id: 4, titleKey: 'proyek.title4', descKey: 'proyek.desc4', tech: ['Laravel', 'Vue.js', 'MySQL', 'Midtrans'], image: '🛒', color: 'from-emerald-500 to-teal-500' },
]

function ProjectCard({ project, index }) {
  const { t } = useLang()
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`group bg-mac-bg/40 rounded-xl border border-mac-border/30 overflow-hidden hover:border-mac-accent/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-mac-accent/10 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${project.color} animate-gradient`} style={{ backgroundSize: '200% 200%' }} />
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
            {project.image}
          </span>
          <div className="flex gap-1.5">
            <a
              href="#"
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-mac-text-dim hover:text-mac-text bg-mac-bg/50 rounded-lg hover:bg-mac-bg hover:border-mac-accent/40 border border-mac-border/30 transition-all"
              title="GitHub"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-mac-text-dim hover:text-mac-green bg-mac-bg/50 rounded-lg hover:bg-mac-bg hover:border-mac-green/40 border border-mac-border/30 transition-all"
              title="Live Demo"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <h3 className="text-mac-text font-bold font-sans text-sm md:text-base mb-1.5 group-hover:text-mac-accent transition-colors">
          {t(project.titleKey)}
        </h3>
        <p className="text-mac-text-dim/70 text-[10px] md:text-xs leading-relaxed mb-3">
          {t(project.descKey)}
        </p>
        <div className="flex flex-wrap gap-1 md:gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-mac-accent/10 text-mac-accent rounded border border-mac-accent/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Proyek() {
  const { t } = useLang()
  const [sectionRef, inView] = useInView({ threshold: 0.05 })

  return (
    <section id="proyek" className="relative min-h-screen flex items-center py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-20 w-50 h-50 bg-mac-yellow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-20 w-50 h-50 bg-mac-pink/5 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
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
            <div className="ml-3 text-mac-text-dim/50 text-[10px] md:text-xs">proyek.js — JavaScript</div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-6">
              <p className="text-mac-green text-xs md:text-sm mb-1 font-mono">
                <span className="text-mac-text-dim">~ </span>
                <span className="text-mac-accent">{t('proyek.terminal')}</span>
              </p>
              <p className="text-mac-text-dim/40 text-[10px] md:text-xs">────────────────</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="mt-6 bg-mac-bg/40 rounded-lg p-3 md:p-4 border border-mac-border/30">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-mac-text-dim">
                <span className="text-mac-green">$</span>
                <span className="text-mac-accent">{t('proyek.cmd')}</span>
                <span className="text-mac-text-dim/40 ml-2 hidden sm:inline">{t('proyek.cmd_suffix')}</span>
              </div>
              <div className="mt-2 flex items-center gap-4 text-mac-green/60 text-[10px]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-mac-green animate-ping" />
                  {t('proyek.build_status')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
