'use client'

import { useForm } from 'react-hook-form'
import { GitBranch, Link2Icon, Mail } from 'lucide-react'

type FormData = {
  name:    string
  email:   string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to an email service (Resend, EmailJS, Formspree, etc.)
    // For now, just logs to console
    console.log('Form submitted:', data)
    await new Promise((r) => setTimeout(r, 800)) // fake delay
    reset()
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left — text */}
        <div>
          <p className="font-mono text-accent text-sm tracking-widest mb-3">05. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            I&apos;m currently open to new opportunities. Whether you have a project, 
            a question, or just want to say hi — my inbox is open.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: GitBranch,   href: 'https://github.com/yourname',            label: 'GitHub'   },
              { icon: Link2Icon, href: 'https://linkedin.com/in/yourname',        label: 'LinkedIn' },
              { icon: Mail,     href: 'mailto:your@email.com',                   label: 'Email'    },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 border border-border rounded-lg text-muted 
                           hover:border-accent hover:text-accent transition-all duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-muted font-mono">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Jane Doe"
              className={`bg-surface border rounded px-4 py-3 text-text text-sm outline-none 
                          focus:border-accent transition-colors placeholder:text-muted/40
                          ${errors.name ? 'border-red-500' : 'border-border'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-muted font-mono">Email</label>
            <input
              id="email"
              type="email"
              placeholder="jane@example.com"
              className={`bg-surface border rounded px-4 py-3 text-text text-sm outline-none 
                          focus:border-accent transition-colors placeholder:text-muted/40
                          ${errors.email ? 'border-red-500' : 'border-border'}`}
              {...register('email', {
                required: 'Email is required',
                pattern:  { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
              })}
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm text-muted font-mono">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell me about your project..."
              className={`bg-surface border rounded px-4 py-3 text-text text-sm outline-none 
                          focus:border-accent transition-colors placeholder:text-muted/40 resize-none
                          ${errors.message ? 'border-red-500' : 'border-border'}`}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent text-bg font-semibold py-3 rounded 
                       hover:opacity-90 transition-opacity duration-200 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </button>

          {isSubmitSuccessful && (
            <p className="text-accent text-sm text-center font-mono">
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
        </form>

      </div>
    </section>
  )
}
