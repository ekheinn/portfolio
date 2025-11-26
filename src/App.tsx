import './App.css'
import LiquidEther from './components/LiquidEther/LiquidEther'
import LogoLoop from './components/LogoLoop/LogoLoop'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiGit,
  SiJest,
  SiCypress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
} from 'react-icons/si'
import TextType from './components/TextType/TextType'
import RotatingText from './components/RotatingText/RotatingText'

function App() {
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    {
      node: <SiTypescript />,
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
    {
      node: <SiTailwindcss />,
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com',
    },

    {
      node: <SiNodedotjs />,
      title: 'Node.js',
      href: 'https://nodejs.org',
    },
    {
      node: <SiExpress />,
      title: 'Express.js',
      href: 'https://expressjs.com',
    },
    {
      node: <SiPython />,
      title: 'Python',
      href: 'https://python.org',
    },
    {
      node: <SiDjango />,
      title: 'Django',
      href: 'https://djangoproject.com',
    },
    {
      node: <SiFastapi />,
      title: 'FastAPI',
      href: 'https://fastapi.tiangolo.com',
    },
    {
      node: <SiGraphql />,
      title: 'GraphQL',
      href: 'https://graphql.org',
    },

    {
      node: <SiPostgresql />,
      title: 'PostgreSQL',
      href: 'https://postgresql.org',
    },
    {
      node: <SiMongodb />,
      title: 'MongoDB',
      href: 'https://mongodb.com',
    },
    {
      node: <SiRedis />,
      title: 'Redis',
      href: 'https://redis.io',
    },
    {
      node: <SiPrisma />,
      title: 'Prisma',
      href: 'https://prisma.io',
    },

    {
      node: <SiDocker />,
      title: 'Docker',
      href: 'https://docker.com',
    },
    {
      node: <SiKubernetes />,
      title: 'Kubernetes',
      href: 'https://kubernetes.io',
    },
    {
      node: <SiAmazonwebservices />,
      title: 'AWS',
      href: 'https://aws.amazon.com',
    },
    {
      node: <SiVercel />,
      title: 'Vercel',
      href: 'https://vercel.com',
    },
    {
      node: <SiTerraform />,
      title: 'Terraform',
      href: 'https://terraform.io',
    },

    {
      node: <SiJest />,
      title: 'Jest',
      href: 'https://jestjs.io',
    },
    {
      node: <SiCypress />,
      title: 'Cypress',
      href: 'https://cypress.io',
    },

    {
      node: <SiGit />,
      title: 'Git',
      href: 'https://git-scm.com',
    },
    {
      node: <SiGithubactions />,
      title: 'GitHub Actions',
      href: 'https://github.com/features/actions',
    },
    {
      node: <SiJenkins />,
      title: 'Jenkins',
      href: 'https://jenkins.io',
    },
  ]

  return (
    <>
      <div id='main'>
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
                texts={['Full-Stack!', 'Back-End', 'Front-End', 'DevOps']}
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
        <div id='welcome-text'>
          <TextType
            text={[
              'Seja bem-vindo ao meu portifólio!',
              'Conheça o meu trabalho!',
              'Happy coding!',
            ]}
            typingSpeed={80}
            pauseDuration={2000}
            deletingSpeed={35}
            variableSpeed={{ min: 40, max: 180 }}
            showCursor={true}
            cursorBlinkDuration={0.3}
            cursorCharacter='▌'
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugit inventore architecto eius aliquam repudiandae beatae in eos
            eveniet, animi velit, rerum delectus error? Ex deleniti error
            impedit excepturi iste.
          </p>
        </div>

        <div id='stack-logos'>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction='right'
            logoHeight={80}
            gap={120}
            hoverSpeed={-5}
            scaleOnHover
            fadeOut
            fadeOutColor='#0e0e0e'
            ariaLabel='Technology partners'
            style={{
              color: 'transparent',
            }}
          />
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction='left'
            logoHeight={50}
            gap={120}
            hoverSpeed={5}
            scaleOnHover
            fadeOut
            fadeOutColor='#0e0e0e'
            ariaLabel='Technology partners'
            style={{
              color: 'transparent',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App
