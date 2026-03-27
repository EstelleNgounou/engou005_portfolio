'use client'
import { useState } from 'react'
import Navbar        from '@/components/ui/Navbar'
import Hero          from '@/components/sections/Hero'
import About         from '@/components/sections/About'
import Skills        from '@/components/sections/Skills'
import Projects      from '@/components/sections/Projects'
import Education     from '@/components/sections/Education'
import Contact       from '@/components/sections/Contact'
import type { Locale } from '@/data/translations'

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en')

  return (
    <main>
      <Navbar locale={locale} setLocale={setLocale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Education locale={locale} />
      <Contact locale={locale} />
    </main>
  )
}
