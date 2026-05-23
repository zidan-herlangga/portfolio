import { useLang } from '../contexts/LanguageContext'
import useInView from '../hooks/useInView'

const skillCategories = [
  {
    icon: '⚛️',
    title: 'frontend.js',
    subtitleKey: 'keahlian.frontend',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    icon: '🖥️',
    title: 'backend.py',
    subtitleKey: 'keahlian.backend',
    skills: [
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'MySQL', level: 78 },
    ],
  },
  {
    icon: '🔧',
    title: 'tools.sh',
    subtitleKey: 'keahlian.tools',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Webpack/Vite', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Chrome DevTools', level: 90 },
    ],
  },
  {
    icon: '🎯',
    title: 'other.json',
    subtitleKey: 'keahlian.lainnya',
    skills: [
      { name: 'Responsive Design', level: 95 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'SEO', level: 75 },
      { name: 'Accessibility', level: 80 },
    ],
  },
]

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className="mb-2.5 md:mb-3 group">
      <div className="flex justify-between text-[10px] md:text-xs mb-1">
        <span className="text-mac-text group-hover:text-mac-accent transition-colors">{name}</span>
        <span className="text-mac-text-dim">{level}%</span>
      </div>
      <div className="h-1.5 md:h-2 bg-mac-bg rounded-full overflow-hidden border border-mac-border/30">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-mac-accent via-mac-sapphire to-mac-mauve transition-all duration-1000 ease-out ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay || 0}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Keahlian() {
  const { t } = useLang()
  const [sectionRef, inView] = useInView({ threshold: 0.05 })

  const techTags = ['React', 'Vue.js', 'Laravel', 'PHP', 'Python', 'Node.js', 'Tailwind', 'Git', 'Figma', 'VS Code']

  return (
    <section id="keahlian" className="relative min-h-screen flex items-center py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-mac-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-10 w-40 h-40 bg-mac-mauve/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={sectionRef}
        className={`max-w-5xl w-full mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-mac-surface/90 backdrop-blur-sm rounded-2xl border border-mac-border/60 overflow-hidden shadow-2xl shadow-black/20">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-mac-bg/60 border-b border-mac-border/50">
            <div className="w-3 h-3 rounded-full bg-mac-red transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-yellow transition-transform hover:scale-110 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-mac-green transition-transform hover:scale-110 cursor-pointer" />
            <div className="ml-3 text-mac-text-dim/50 text-[10px] md:text-xs">keahlian.yml — YAML</div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-6">
              <p className="text-mac-green text-xs md:text-sm mb-1 font-mono">
                <span className="text-mac-text-dim">~ </span>
                <span className="text-mac-accent">{t('keahlian.terminal')}</span>
              </p>
              <p className="text-mac-text-dim/40 text-[10px] md:text-xs">────────────────</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-mac-bg/40 rounded-xl p-4 md:p-5 border border-mac-border/30 hover:border-mac-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-mac-accent/5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg md:text-xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-mac-text font-bold font-sans text-xs md:text-sm">{t(cat.subtitleKey)}</h3>
                      <p className="text-mac-text-dim/40 text-[10px] font-mono">{cat.title}</p>
                    </div>
                  </div>
                  <div className="h-px bg-mac-border/30 my-3" />
                  {cat.skills.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 md:mt-6 bg-mac-bg/40 rounded-lg p-3 md:p-4 border border-mac-border/30">
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-mac-text-dim">
                <span className="text-mac-green">$</span>
                <span className="text-mac-accent">{t('keahlian.cmd')}</span>
                <span className="text-mac-text-dim/40 ml-2 hidden sm:inline">{t('keahlian.cmd_suffix')}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {techTags.map((t) => (
                  <span key={t} className="text-[10px] px-1.5 py-0.5 bg-mac-accent/10 text-mac-accent rounded border border-mac-accent/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
