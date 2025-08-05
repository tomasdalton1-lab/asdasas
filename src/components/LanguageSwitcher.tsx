
'use client'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function LanguageSwitcher() {
  const router = useRouter()
  const { i18n } = useTranslation()

  const switchLang = () => {
    const newLocale = i18n.language === 'en' ? 'es' : 'en'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <button onClick={switchLang} className="absolute top-6 right-6 text-sm font-medium bg-white/10 backdrop-blur px-3 py-1 rounded text-white hover:bg-white/20 transition">
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
