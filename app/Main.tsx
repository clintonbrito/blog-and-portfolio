'use client'
import StringsAnimated from '@/components/StringsAnimated'

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pb-16 pt-6 md:space-y-5">
          <h1 className="mb-16 pb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello there 👋
          </h1>
          <p className="text-xl leading-7 text-gray-500 dark:text-gray-200">
            Welcome! I’m <b>Clinton Brito</b>, but you can call me "Bill". 🥳
          </p>

          <p className="text-xl leading-7 text-gray-500 dark:text-gray-200">
            I currently live in Brazil 🇧🇷 and I've been studying Software Development for almost 2
            years.
          </p>

          <p className="text-xl leading-7 text-gray-500 dark:text-gray-200">
            I'm passionate about technology, programming, and other nerdy stuff.
          </p>

          <p className="text-xl leading-7 text-gray-500 dark:text-gray-200">
            This website primarily serves to document my career transition and as a technical blog
            to support my content creation.
          </p>
          <StringsAnimated />
        </div>
      </div>
    </>
  )
}
