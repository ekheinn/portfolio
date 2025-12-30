import type { ReactNode } from 'react'
import { FiFigma } from 'react-icons/fi'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiGit,
  SiReact,
  SiVite,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiRedis,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiGrafana,
  SiKeycloak,
  SiSwagger,
  SiFlask,
} from 'react-icons/si'
import { TbDatabase } from 'react-icons/tb'

export interface TechLogo {
  node: ReactNode
  title: string
  href: string
}

export const techLogos: TechLogo[] = [
  {
    node: <SiJavascript />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
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
    node: <SiGit />,
    title: 'Git',
    href: 'https://git-scm.com',
  },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  {
    node: <SiVite />,
    title: 'Vite',
    href: 'https://vitejs.dev',
  },
  {
    node: <SiTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
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
    node: <SiNodedotjs />,
    title: 'Node.js',
    href: 'https://nodejs.org',
  },
  {
    node: <SiTailwindcss />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    node: <SiExpress />,
    title: 'Express.js',
    href: 'https://expressjs.com',
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
    node: <SiRedis />,
    title: 'Redis',
    href: 'https://redis.io',
  },
  {
    node: <SiVercel />,
    title: 'Vercel',
    href: 'https://vercel.com',
  },
  {
    node: <SiGithub />,
    title: 'GitHub',
    href: 'https://github.com',
  },
  {
    node: <SiGitlab />,
    title: 'GitLab',
    href: 'https://gitlab.com',
  },
  {
    node: <SiGithubactions />,
    title: 'GitHub Actions',
    href: 'https://github.com/features/actions',
  },
  {
    node: <SiNginx />,
    title: 'Nginx',
    href: 'https://nginx.org',
  },
  {
    node: <SiLinux />,
    title: 'Linux',
    href: 'https://www.linux.org',
  },
  {
    node: <TbDatabase />,
    title: 'NoSQL',
    href: 'https://en.wikipedia.org/wiki/NoSQL',
  },
  {
    node: <FiFigma />,
    title: 'Figma',
    href: 'https://www.figma.com/',
  },
  {
    node: <SiGrafana />,
    title: 'Grafana',
    href: 'https://www.grafana.com/',
  },
  {
    node: <SiKeycloak />,
    title: 'Keycloak',
    href: 'https://www.keycloak.org/',
  },
  {
    node: <SiSwagger />,
    title: 'Swagger',
    href: 'https://swagger.io/',
  },
  {
    node: <SiFlask />,
    title: 'Flask',
    href: 'https://flask.palletsprojects.com/',
  },
]
