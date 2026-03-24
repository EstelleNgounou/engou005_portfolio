export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl min-h-screen mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="font-mono text-accent text-sm tracking-widest mb-3">01. About me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            Who I am
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            {/* TODO: Replace with your actual bio */}
            I&apos;m a Full Stack Developer based in Montréal, passionate about building 
            products that live at the intersection of great engineering and great design.
          </p>
          <p className="text-muted leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me [your hobbies / interests here].
          </p>
        </div>

        {/* Stats / quick facts */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '3+',  label: 'Years of experience' },
            { value: '20+', label: 'Projects completed'  },
            { value: '10+', label: 'Technologies'        },
            { value: '∞',   label: 'Coffee consumed'     },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-border rounded-lg p-6 text-center 
                         hover:border-accent/40 transition-colors duration-300"
            >
              <span className="block text-3xl font-bold text-accent mb-1">{stat.value}</span>
              <span className="text-muted text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
