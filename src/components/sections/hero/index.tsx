
'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { ScheduleButton } from '@/components/ui/schedule-button/schedule-button'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation('common')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="top" className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          {t('hero.subtitle')}
        </p>
        <ScheduleButton />
      </div>
    </section>
  )
}
