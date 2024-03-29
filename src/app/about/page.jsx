import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { ClientRenderedImage } from './image'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I am Ibtasham Ali, residing in Lahore, Pakistan, where I shape the digital realm.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <ClientRenderedImage />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I am Ibtasham Ali, residing in Lahore, Pakistan, where I shape the digital realm.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Hello there! I am Ibtasham Ali, a skilled software developer specializing in Node.js, React, MongoDB, NestJS, and a touch of Vue, along with proficiency in SQL. My expertise lies in crafting intuitive and scalable web applications tailored to diverse client requirements. I am dedicated to producing efficient and dependable software, collaborating seamlessly with fellow developers, designers, and stakeholders to achieve project objectives.
            </p>
            <p>
            Beyond my professional endeavors, I find joy in exploring new destinations, often opting for adventurous travel. Whether embarking on solo journeys or group escapades, I relish the exhilarating sense of freedom and discovery that accompanies each trip. Additionally, I nurture a fondness for hiking, leveraging it as a means to reconnect with nature and test my physical and mental limits. These pursuits serve as my source of rejuvenation and contribute to my innovative outlook in the realm of software development.
            </p>
            <p>
            Emphasizing collaboration and inclusivity, I strongly believe in the power of collective efforts and diverse perspectives in achieving exceptional results. I remain committed to staying abreast of the latest technological advancements in the software domain, ensuring top-notch deliverables for my clients and maintaining a competitive edge in the industry. Whether I am delving into coding challenges or exploring the great outdoors, my approach is driven by an unwavering spirit of curiosity, dedication, and enthusiasm.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/ibtashamalee" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/ibtashamalee" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/ibtashamalee" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/ibtashamalee" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:contact@ibtashamalee.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              contact@ibtashamalee.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
