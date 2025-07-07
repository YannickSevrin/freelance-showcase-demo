import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YS-DEMO | Freelance Showcase Demo',
    short_name: 'YS-DEMO',
    description: 'A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['business', 'productivity', 'portfolio'],
    lang: 'en',
    scope: '/',
    orientation: 'portrait-primary',
  }
} 