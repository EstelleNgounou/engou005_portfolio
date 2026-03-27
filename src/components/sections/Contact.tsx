'use client'

import { useForm } from 'react-hook-form'
import { GitBranch, Link2Icon, Mail } from 'lucide-react'
import { motion } from "framer-motion"
import { useState } from 'react'
import { translations } from '@/data/translations'

type FormData = {
  name:    string
  email:   string
  message: string
}

import { type Locale } from '@/data/translations'

type ContactProps = {
  locale: Locale
}

export default function Contact({ locale }: ContactProps) {
  // Locale passed for future translation implementation
  const t = translations[locale].contact
  const [serverError, setServerError] = useState<string | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        reset()
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setServerError(t.form.error)
    }
  }

  return (
    <section id="contact" style={{ minHeight: '100vh', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem)', display: 'flex', alignItems: 'center', backgroundColor: '#111318' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>
        
        <p style={{ fontFamily: 'monospace', color: '#4FFFA4', fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
          05. Contact
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: '700', color: '#E8EAF0', marginBottom: 'clamp(1.5rem, 3vw, 1rem)' }}>
          {t.heading}
        </h2>

        <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <div>
              <p style={{ color: '#5A6072', lineHeight: '1.75', marginBottom: '2rem', fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)' }}>
                {t.description}
              </p>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'clamp(0.5rem, 2vw, 1rem)',
              justifyContent: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              flexWrap: 'wrap'
            }}>
              {[
                { icon: GitBranch,   href: 'https://github.com/EstelleNgounou',            label: 'GitHub'   },
                { icon: Link2Icon, href: 'https://www.linkedin.com/in/estelle-ngounou-47941b26a/',        label: 'LinkedIn' },
                { icon: Mail,     href: 'mailto:deln.994@gmail.com',                   label: 'Email'    },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    padding: 'clamp(0.5rem, 1vw, 0.75rem)',
                    border: '1px solid #252A36',
                    borderRadius: '0.5rem',
                    color: '#5A6072',
                    transition: 'all 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4FFFA4'
                    e.currentTarget.style.color = '#4FFFA4'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#252A36'
                    e.currentTarget.style.color = '#5A6072'
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div></div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            noValidate
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <label htmlFor="name" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', color: '#5A6072', fontFamily: 'monospace' }}>{t.form.name}</label>
              <input
                id="name"
                type="text"
                placeholder={t.form.namePlaceholder}
                style={{
                  backgroundColor: '#0D0F14',
                  border: `1px solid ${errors.name ? '#ef4444' : '#252A36'}`,
                  borderRadius: '0.5rem',
                  padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                  color: '#E8EAF0',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                className="contact-input"
                onFocus={(e) => e.currentTarget.style.borderColor = '#4FFFA4'}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span style={{ color: '#ef4444', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)' }}>{errors.name.message}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <label htmlFor="email" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', color: '#5A6072', fontFamily: 'monospace' }}>{t.form.email}</label>
              <input
                id="email"
                type="email"
                placeholder={t.form.emailPlaceholder}
                style={{
                  backgroundColor: '#0D0F14',
                  border: `1px solid ${errors.email ? '#ef4444' : '#252A36'}`,
                  borderRadius: '0.5rem',
                  padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                  color: '#E8EAF0',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                className="contact-input"
                onFocus={(e) => e.currentTarget.style.borderColor = '#4FFFA4'}
                {...register('email', {
                  required: 'Email is required',
                  pattern:  { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                })}
              />
              {errors.email && <span style={{ color: '#ef4444', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)' }}>{errors.email.message}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <label htmlFor="message" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', color: '#5A6072', fontFamily: 'monospace' }}>{t.form.message}</label>
              <textarea
                id="message"
                rows={5}
                placeholder={t.form.messagePlaceholder}
                style={{
                  backgroundColor: '#0D0F14',
                  border: `1px solid ${errors.message ? '#ef4444' : '#252A36'}`,
                  borderRadius: '0.5rem',
                  padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                  color: '#E8EAF0',
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  resize: 'none',
                  fontFamily: 'inherit'
                }}
                className="contact-input"
                onFocus={(e) => e.currentTarget.style.borderColor = '#4FFFA4'}
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <span style={{ color: '#ef4444', fontSize: 'clamp(0.65rem, 1vw, 0.75rem)' }}>{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#4FFFA4',
                color: '#0D0F14',
                fontWeight: '600',
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem)',
                borderRadius: '0.5rem',
                transition: 'opacity 0.2s',
                opacity: isSubmitting ? 0.5 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                border: 'none',
                fontSize: 'clamp(0.8rem, 1.2vw, 0.875rem)'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) e.currentTarget.style.opacity = '0.9'
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) e.currentTarget.style.opacity = '1'
              }}
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </button>

            {serverError && (
              <p style={{ color: '#ef4444', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', textAlign: 'center' }}>
                {serverError}
              </p>
            )}

            {isSubmitSuccessful && (
              <p style={{ color: '#4FFFA4', fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)', textAlign: 'center', fontFamily: 'monospace' }}>
                {t.form.success}
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  )
}