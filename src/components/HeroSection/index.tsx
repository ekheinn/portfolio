import './HeroSection.css'
import { useRef, useState, useLayoutEffect } from 'react'
import { motion } from 'motion/react'
import LiquidEther from '../LiquidEther'
import RotatingText, { type RotatingTextRef } from '../RotatingText'

const TEXTS = ['Full-Stack!', 'Back-End', 'Front-End', 'DevOps']
const LIQUID_ETHER_COLORS = ['#ff0000', '#ff0000', '#520000']

function HeroSection() {
  const rotatingTextRef = useRef<RotatingTextRef>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [currentWidth, setCurrentWidth] = useState<number | 'auto'>('auto')
  const [currentIndex, setCurrentIndex] = useState(0)

  useLayoutEffect(() => {
    if (measureRef.current) {
      const width = measureRef.current.offsetWidth
      setCurrentWidth((prev) => (prev === width ? prev : width))
    }
  }, [currentIndex])

  return (
    <div id='panel'>
      <div id={'background'}>
        <LiquidEther
          colors={LIQUID_ETHER_COLORS}
          mouseForce={25}
          cursorSize={50}
          isViscous={false}
          iterationsPoisson={40}
          resolution={0.4}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <section id='description'>
        <h1>Heitor Moreira</h1>
        <h2>
          Desenvolvedor{' '}
          <motion.span
            className='rotating-text-wrapper'
            animate={{ width: currentWidth }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          >
            <span ref={measureRef} className='rotating-text-measure'>
              {TEXTS[currentIndex]}
            </span>
            <RotatingText
              ref={rotatingTextRef}
              className='rotating-text'
              texts={TEXTS}
              rotationInterval={3000}
              mainClassName=''
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.005}
              onNext={(index) => setCurrentIndex(index)}
            />
          </motion.span>
        </h2>
      </section>
    </div>
  )
}

export default HeroSection
