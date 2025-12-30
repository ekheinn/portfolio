import './TechStackSection.css'
import LogoLoop from '../LogoLoop'
import { techLogos } from '../../constants/techLogos'
import { useState, useEffect } from 'react'

function TechStackSection() {
  const [dimensions, setDimensions] = useState({
    firstLogoHeight: 80,
    firstGap: 150,
    secondLogoHeight: 50,
    secondGap: 120,
  })

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth

      if (width <= 480) {
        setDimensions({
          firstLogoHeight: 40,
          firstGap: 80,
          secondLogoHeight: 30,
          secondGap: 60,
        })
      } else if (width <= 768) {
        setDimensions({
          firstLogoHeight: 50,
          firstGap: 100,
          secondLogoHeight: 35,
          secondGap: 80,
        })
      } else if (width <= 1024) {
        setDimensions({
          firstLogoHeight: 60,
          firstGap: 120,
          secondLogoHeight: 40,
          secondGap: 100,
        })
      } else {
        setDimensions({
          firstLogoHeight: 80,
          firstGap: 150,
          secondLogoHeight: 50,
          secondGap: 120,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div id='stack-logos'>
      <LogoLoop
        logos={techLogos}
        speed={30}
        direction='right'
        logoHeight={dimensions.firstLogoHeight}
        gap={dimensions.firstGap}
        hoverSpeed={-5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0c0c0c'
        ariaLabel='Tech Stack'
      />
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction='left'
        logoHeight={dimensions.secondLogoHeight}
        gap={dimensions.secondGap}
        hoverSpeed={5}
        scaleOnHover
        fadeOut
        fadeOutColor='#0c0c0c'
        ariaLabel='TechStack'
      />
    </div>
  )
}

export default TechStackSection
