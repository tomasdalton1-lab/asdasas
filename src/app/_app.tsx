
'use client'

import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
