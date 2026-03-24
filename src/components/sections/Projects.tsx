import { ExternalLink, GitBranch } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
// TODO: Replace with your real projects

const projects = [
  {
    title:       'Project One',
    description: 'A short description of what this project does, the problem it solves, and the impact it had.',
    tags:        ['Next.js', 'TypeScript', 'PostgreSQL'],
    github:      'https://github.com/yourname/project-one',
    live:        'https://project-one.vercel.app',
  },
  {
    title:       'Project Two',
    description: 'Another project description. Keep it concise — 2-3 sentences max.',
    tags:        ['React', 'Node.js', 'MongoDB'],
    github:      'https://github.com/yourname/project-two',
    live:        '',
  },
  {
    title:       'Project Three',
    description: 'Describe the tech challenge and how you solved it. Mention scale or results if you have them.',
    tags:        ['Docker', 'Express', 'Redis'],
    github:      'https://github.com/yourname/project-three',
    live:        'https://project-three.com',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto min-h-screen">

        <p className="font-mono text-accent text-sm tracking-widest mb-3">03. Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Things I&apos;ve built</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-4
                         hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <h3 className="text-text font-semibold text-lg">{project.title}</h3>
                <div className="flex gap-3 text-muted">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="hover:text-accent transition-colors">
                      <GitBranch size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
