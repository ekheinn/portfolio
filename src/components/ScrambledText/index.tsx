import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

import './ScrambledText.css'

gsap.registerPlugin(SplitText, ScrambleTextPlugin)

export interface ScrambledTextProps {
  radius?: number
  duration?: number
  speed?: number
  scrambleChars?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const wordsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    if (!rootRef.current) return

    const splits: SplitText[] = []
    let handleMove: ((e: PointerEvent) => void) | null = null

    // Wait for next tick to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      if (!rootRef.current) return

      // Find all paragraph elements within the container
      const paragraphs = rootRef.current.querySelectorAll('p')
      wordsRef.current = []

      paragraphs.forEach((p) => {
        const split = SplitText.create(p, {
          type: 'words',
          wordsClass: 'word',
        })
        splits.push(split)
        wordsRef.current.push(...(split.words as HTMLElement[]))
      })

      wordsRef.current.forEach((word) => {
        gsap.set(word, {
          display: 'inline-block',
          attr: { 'data-content': word.innerHTML },
        })
      })

      handleMove = (e: PointerEvent) => {
        wordsRef.current.forEach((word) => {
          const { left, top, width, height } = word.getBoundingClientRect()
          const dx = e.clientX - (left + width / 2)
          const dy = e.clientY - (top + height / 2)
          const dist = Math.hypot(dx, dy)

          if (dist < radius) {
            gsap.to(word, {
              overwrite: true,
              duration: duration * (1 - dist / radius),
              scrambleText: {
                text: (word as HTMLElement).dataset.content || '',
                chars: scrambleChars,
                speed,
              },
              ease: 'none',
            })
          }
        })
      }

      const el = rootRef.current
      if (handleMove) {
        el.addEventListener('pointermove', handleMove)
      }
    }, 0)

    return () => {
      clearTimeout(timeoutId)
      if (rootRef.current && handleMove) {
        rootRef.current.removeEventListener('pointermove', handleMove)
      }
      splits.forEach((split) => split.revert())
    }
  }, [radius, duration, speed, scrambleChars])

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      {children}
    </div>
  )
}

export default ScrambledText
