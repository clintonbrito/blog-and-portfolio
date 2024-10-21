import { useEffect, useRef } from 'react'
import React from 'react'
import Typed from 'typed.js'

const StringsAnimated = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null)
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings: [
        'I was born in 1993.',
        'I was raised in São Paulo.',
        'I like 🏋️ / 🏃 / 🚴.',
        'I like animals 🐈🐶.',
        'I like movies 🎬.',
        'I like Formula 1 🏎️.',
        'I like soundtracks 🎵.',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="type-wrap text-lg leading-7 text-gray-500 dark:text-gray-200">
      <span ref={el} />
    </div>
  )
}

export default StringsAnimated
