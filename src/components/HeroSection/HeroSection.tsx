import LiquidEther from '../LiquidEther/LiquidEther'
import RotatingText from '../RotatingText/RotatingText'
import './HeroSection.css'

function HeroSection() {
  return (
    <div id='panel'>
      <div id={'background'}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={10}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
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
          <RotatingText
            className='rotating-text'
            texts={[
              'Full-Stack!',
              'Back-End',
              'Front-End',
              'Mobile',
              'DevOps',
            ]}
            rotationInterval={5000}
            mainClassName=''
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.005}
          />
        </h2>
      </section>
    </div>
  )
}

export default HeroSection

