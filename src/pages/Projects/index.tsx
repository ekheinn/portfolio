import './Projects.css'
import { Link } from 'react-router-dom'
import MagicBento from '../../components/MagicBento'
import { projectsData } from '../../constants/projects'
import { useState, useEffect, useRef } from 'react'
import SplitText from '../../components/SplitText'
import Switch from '../../components/Switch'
import swordIMG from '../../assets/sword.png'
import { TbArrowBackUp } from 'react-icons/tb'

function Projects() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const leftSwordRef = useRef<HTMLImageElement>(null)
  const rightSwordRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let animationFrameId: number
    const startTime = Date.now()

    const animate = () => {
      if (!leftSwordRef.current || !rightSwordRef.current) return

      let floatOffset = 0

      if (animationsEnabled) {
        const velocity = 1.5
        const extent = 20
        const elapsed = (Date.now() - startTime) / 1000
        floatOffset = Math.sin(elapsed * velocity) * extent
      }

      leftSwordRef.current.style.transform = `translateY(calc(50% + ${floatOffset}px))`
      rightSwordRef.current.style.transform = `translateY(calc(-50% + ${floatOffset}px))`

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [animationsEnabled])

  return (
    <div className='projects-page'>
      <SplitText text='Meus projetos!' className='projects-title' />

      <div className='projects-nav'>
        <Link to='/' className='nav-buttons'>
          <TbArrowBackUp />
          Voltar
        </Link>

        <p>
          Bem-vindo(a)! Aqui você pode explorar alguns dos meus principais
          projetos e trabalhos. Cada card conta um pouco da minha experiência,
          passando por aplicações, automações e soluções criativas. Clique em um
          card para conhecer mais detalhes sobre o projeto.
        </p>

        <div className='nav-buttons'>
          <Switch
            checked={animationsEnabled}
            onChange={setAnimationsEnabled}
            label='Animações'
            id='toggle-animations'
          />
        </div>
      </div>

      <img
        ref={leftSwordRef}
        src={swordIMG}
        className='sword-detail sword-left'
      />
      <img
        ref={rightSwordRef}
        src={swordIMG}
        className='sword-detail sword-right'
      />

      <div id='bento'>
        <MagicBento
          cardData={projectsData}
          enableTilt={true}
          enableMagnetism={false}
          spotlightRadius={400}
          disableAnimations={!animationsEnabled}
        />
      </div>
    </div>
  )
}

export default Projects
