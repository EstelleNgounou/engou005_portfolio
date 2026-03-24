// ─── Data ────────────────────────────────────────────────────────────────────
// TODO: Replace with your real education / certifications

const education = [
  {
    degree:      'Bachelor of Computer Science',
    institution: 'Université de Montréal',
    period:      '2019 – 2022',
    description: 'Focus on algorithms, distributed systems, and software engineering.',
  },
  {
    degree:      'AWS Certified Developer – Associate',
    institution: 'Amazon Web Services',
    period:      '2023',
    description: 'Cloud architecture, serverless functions, CI/CD on AWS.',
  },
  {
    degree:      'Full Stack Web Development Bootcamp',
    institution: 'Le Wagon Montréal',
    period:      '2018',
    description: 'Intensive 9-week program covering Ruby on Rails, JS, and React.',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl  min-h-screen mx-auto">

        <p className="font-mono text-accent text-sm tracking-widest mb-3">04. Education</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Background</h2>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

          {education.map((item, i) => (
            <div key={i} className="relative pl-12 pb-10 last:pb-0">
              {/* Dot */}
              <div className="absolute left-[13px] top-[6px] w-2.5 h-2.5 rounded-full 
                              bg-accent border-2 border-bg" />

              <span className="font-mono text-xs text-muted tracking-widest">{item.period}</span>
              <h3 className="text-text font-semibold text-lg mt-1">{item.degree}</h3>
              <p className="text-accent text-sm mb-2">{item.institution}</p>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
