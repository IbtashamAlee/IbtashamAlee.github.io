import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import AboutImage from '@/images/portrait.jpg'

import '@/styles/tailwind.css'

export const runtime = 'edge';

export const metadata = {
  title: {
    template: '%s - Ibtasham Ali',
    default:
      'Ibtasham Ali - Passionate Software Engineer, Tech Enthusiast, and Fitness Advocate',
  },
  description:
    'I am Ibtasham Ali, Software Engineer specialized in JavaScript, particularly with a focus on Node.js. With extensive experience in crafting exceptional software solutions, I bring a strong skill set to every project. Beyond my love for technology, I am also an avid gym-goer, committed to maintaining a strong and healthy physique.',
  openGraph: {
    title: "About - Ibtasham Ali",
    description:
    'I am Ibtasham Ali, a Software Engineer specializing in JavaScript, particularly with an emphasis on Node.js. With a wealth of experience in developing exceptional software solutions, I bring a robust skill set to every project. Apart from my enthusiasm for technology, I am dedicated to regular gym sessions, prioritizing the maintenance of a strong and healthy physique.',
    images: [
      {
        url: "AboutImage",
        alt: 'Ibtasham Ali - Software Engineer',
      },
    ],
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
