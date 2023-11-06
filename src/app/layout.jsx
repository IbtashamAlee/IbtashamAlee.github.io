import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import AboutImage from '@/images/portrait.jpg'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s | Ibtasham Ali',
    default:
      'Ibtasham Ali - Software Engineer',
  },
  description:
    'I am Ibtasham Ali, Software Engineer specialized in JavaScript, particularly with a focus on Node.js. With extensive experience in crafting exceptional software solutions, I bring a strong skill set to every project. Beyond my love for technology, I am also an avid gym-goer, committed to maintaining a strong and healthy physique.',
  openGraph: {
    siteName: "Ibtasham Ali - Portfolio",
    title: "Ibtasham Ali - Passionate Software Engineer, Tech Enthusiast, and Fitness Advocate",
    description:
    'I am Ibtasham Ali, a Software Engineer specializing in JavaScript, particularly with an emphasis on Node.js. With a wealth of experience in developing exceptional software solutions, I bring a robust skill set to every project. Apart from my enthusiasm for technology, I am dedicated to regular gym sessions, prioritizing the maintenance of a strong and healthy physique.',
    images: "https://firebasestorage.googleapis.com/v0/b/better-cui.appspot.com/o/IMG_0713-%20squared-compressed.jpg?alt=media&token=92bb5928-b211-40a2-88a4-25db8adca895&_gl=1*ez5fkw*_ga*MTgxMTg0NzMzMC4xNjk5Mjg1ODI3*_ga_CW55HF8NVT*MTY5OTI5OTc2OS40LjEuMTY5OTI5OTc4NS40NC4wLjA.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  icons: {
    shortcut: "https://firebasestorage.googleapis.com/v0/b/better-cui.appspot.com/o/IMG_0713-%20squaredx64.jpg?alt=media&token=7a371124-097b-4267-9862-ffea17f78c34&_gl=1*liqejs*_ga*MTgxMTg0NzMzMC4xNjk5Mjg1ODI3*_ga_CW55HF8NVT*MTY5OTI4ODAyOC4yLjEuMTY5OTI4ODA2MC4yOC4wLjA."
  },
  keywords: [
    "Ibtasham Ali",
    "Ibtasham Alee",
    "Ibtashamalee",
    "ibtashamalee.com",
    "alee jaan",
    "Software Engineer",
    "Programming",
    "Coding",
    "Fitness",
    "Gym",
    "Science",
    "Computer Science",
    "Management",
    "Leadership",
    "Business",
    "Software Development",
    "Germany",
    "Portfolio",
    "Ibtasham Ali Portfolio",
    "Ibtasham Alee Portfolio",
  ],  
  robots: {
    index: true,
    follow: true
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
      <head>
        <meta name="google-site-verification" content="4_DOhazTzAhZmZFquldvSWCWXgJneP85baMO4hYVhTU" />
        <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/better-cui.appspot.com/o/IMG_0713-%20squaredx64.jpg?alt=media&token=7a371124-097b-4267-9862-ffea17f78c34&_gl=1*liqejs*_ga*MTgxMTg0NzMzMC4xNjk5Mjg1ODI3*_ga_CW55HF8NVT*MTY5OTI4ODAyOC4yLjEuMTY5OTI4ODA2MC4yOC4wLjA." />
      </head>
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
