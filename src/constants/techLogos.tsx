import type { ReactNode } from 'react'
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

export interface TechLogo {
  node: ReactNode
  title: string
  href: string
}

export const techLogos: TechLogo[] = [
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
