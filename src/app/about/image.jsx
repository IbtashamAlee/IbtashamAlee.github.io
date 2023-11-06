'use client'
import React from 'react'
import Image from 'next/image'
import portraitImage from '@/images/portrait.jpg'

export function ClientRenderedImage() {
  const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <React.Fragment>
      {!isLoaded && (
        <Image
          src={portraitImage}
          alt=""
          placeholder="blur"
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {isLoaded && (
        <Image
          src={portraitImage}
          alt=""
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
        />
      )}
    </React.Fragment>
  )
}
