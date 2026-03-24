// ─── Data ────────────────────────────────────────────────────────────────────
// TODO: Adjust levels and add/remove techs to match your actual skills

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript',      level: 85 },
      { name: 'Tailwind CSS',    level: 88 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'PostgreSQL',        level: 78 },
      { name: 'REST / GraphQL',    level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker',       level: 72 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'CI/CD',        level: 68 },
    ],
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto min-h-screen">

        <p className="font-mono text-accent text-sm tracking-widest mb-3">02. Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">My tech stack</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-surface border border-border rounded-lg p-6 
                         hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-accent font-mono text-sm tracking-widest mb-6 uppercase">
                {group.category}
              </h3>

              <ul className="flex flex-col gap-5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-text text-sm">{skill.name}</span>
                      <span className="text-muted text-xs font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
