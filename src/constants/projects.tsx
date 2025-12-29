import type { BentoCardProps } from '../components/MagicBento'
import {
  SiPython,
  SiDjango,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiJavascript,
  SiExpress,
  SiVite,
  SiNginx,
  SiElastic,
  SiGunicorn,
  SiKubernetes,
} from 'react-icons/si'
import { TbBrandOpenSource } from 'react-icons/tb'
import { VscKey } from 'react-icons/vsc'

export const projectsData: BentoCardProps[] = [
  {
    color: '#050000ff',
    title: 'Portfólio',
    description:
      'Aplicação web desenvolvida para apresentar meus trabalhos, experiências e informações profissionais.',
    detailedInfo:
      'Este projeto foi criado com o objetivo de servir como um portfólio pessoal, reunindo projetos, habilidades e experiências profissionais em um único lugar. A aplicação prioriza uma interface limpa, navegação intuitiva e boas práticas de desenvolvimento, permitindo que visitantes conheçam melhor os trabalhos desenvolvidos e as tecnologias utilizadas. O código-fonte está disponível para consulta e evolução contínua.',
    isPrivate: false,
    sourceCodeUrl: 'https://github.com/ekheinn/portfolio',
    technologies: [
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiTypescript />,
        title: 'TypeScript',
        href: 'https://typescriptlang.org',
        color: '#3178C6',
      },
      {
        icon: <SiVite />,
        title: 'Vite',
        href: 'https://vitejs.dev',
        color: '#646CFF',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'IOC-Enrich',
    description:
      'Enriquecimento e correlação de Indicadores de Comprometimento (IOCs)',
    detailedInfo:
      'Sistema desenvolvido para enriquecer e correlacionar Indicadores de Comprometimento (IOCs) em ambientes de segurança. O projeto permite a análise automatizada de dados de segurança, facilitando a identificação de padrões e ameaças potenciais.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiJavascript />,
        title: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        color: '#F7DF1E',
      },
      {
        icon: <SiExpress />,
        title: 'Express.js',
        href: 'https://expressjs.com',
        color: '#FFFFFF',
      },
      {
        icon: <SiElastic />,
        title: 'Elastic APM',
        href: 'https://www.elastic.co/apm',
        color: '#00BFB3',
      },
      {
        icon: <VscKey />,
        title: 'Keycloak',
        href: 'https://www.keycloak.org',
        color: '#4D4D4D',
      },
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiVite />,
        title: 'Vite',
        href: 'https://vitejs.dev',
        color: '#646CFF',
      },
      {
        icon: <SiNginx />,
        title: 'Nginx',
        href: 'https://nginx.org',
        color: '#009639',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'Exgrid',
    description:
      'Automação e apoio à criação de apresentações baseadas em planilhas',
    detailedInfo:
      'Ferramenta de automação desenvolvida para facilitar a criação de apresentações a partir de dados de planilhas. O Exgrid automatiza processos manuais, reduzindo significativamente o tempo necessário para gerar apresentações profissionais e consistentes.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiDjango />,
        title: 'Django',
        href: 'https://djangoproject.com',
        color: '#092E20',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiJavascript />,
        title: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        color: '#F7DF1E',
      },
      {
        icon: <SiNginx />,
        title: 'Nginx',
        href: 'https://nginx.org',
        color: '#009639',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'MaturIT',
    description: 'Avaliação de maturidade e análise de riscos organizacionais',
    detailedInfo:
      'Sistema completo para avaliação de maturidade tecnológica e análise de riscos organizacionais. O MaturIT oferece uma plataforma integrada para gestão de avaliações, geração de relatórios detalhados e acompanhamento de métricas de maturidade ao longo do tempo.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiVite />,
        title: 'Vite',
        href: 'https://vitejs.dev',
        color: '#646CFF',
      },
      {
        icon: <SiTypescript />,
        title: 'TypeScript',
        href: 'https://typescriptlang.org',
        color: '#3178C6',
      },
      {
        icon: <SiPostgresql />,
        title: 'PostgreSQL',
        href: 'https://postgresql.org',
        color: '#4169E1',
      },
      {
        icon: <SiDjango />,
        title: 'Django',
        href: 'https://djangoproject.com',
        color: '#092E20',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
      {
        icon: <SiNginx />,
        title: 'Nginx',
        href: 'https://nginx.org',
        color: '#009639',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'Nexus',
    description: 'Gerenciamento centralizado de ativos e inventário de rede',
    detailedInfo:
      'Plataforma de gerenciamento centralizado para ativos de TI e inventário de rede. O Nexus fornece uma visão unificada de todos os ativos da organização, facilitando o controle, monitoramento e manutenção da infraestrutura de rede.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiJavascript />,
        title: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        color: '#F7DF1E',
      },
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiDjango />,
        title: 'Django',
        href: 'https://djangoproject.com',
        color: '#092E20',
      },
      {
        icon: <SiPython />,
        title: 'Python',
        href: 'https://python.org',
        color: '#3776AB',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'SRH',
    description: 'Automação de relatórios e análises de métricas do Cloudflare',
    detailedInfo:
      'Sistema de automação para geração de relatórios e análises de métricas do Cloudflare. O SRH integra-se com as APIs do Cloudflare para coletar dados, processar métricas e gerar relatórios automatizados, otimizando o monitoramento e análise de performance.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiVite />,
        title: 'Vite',
        href: 'https://vitejs.dev',
        color: '#646CFF',
      },
      {
        icon: <SiJavascript />,
        title: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        color: '#F7DF1E',
      },
      {
        icon: <SiPostgresql />,
        title: 'PostgreSQL',
        href: 'https://postgresql.org',
        color: '#4169E1',
      },
      {
        icon: <SiDjango />,
        title: 'Django',
        href: 'https://djangoproject.com',
        color: '#092E20',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
      {
        icon: <SiNginx />,
        title: 'Nginx',
        href: 'https://nginx.org',
        color: '#009639',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'CMS Grupo NTSec',
    description: 'Sistema de gerenciamento de conteúdo corporativo',
    detailedInfo:
      'Sistema de gerenciamento de conteúdo desenvolvido especificamente para as necessidades corporativas do Grupo NTSec. O CMS oferece uma interface intuitiva para criação, edição e publicação de conteúdo, com recursos avançados de controle de acesso e versionamento.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiReact />,
        title: 'React',
        href: 'https://react.dev',
        color: '#61DAFB',
      },
      {
        icon: <SiTypescript />,
        title: 'TypeScript',
        href: 'https://typescriptlang.org',
        color: '#3178C6',
      },
      {
        icon: <SiVite />,
        title: 'Vite',
        href: 'https://vitejs.dev',
        color: '#646CFF',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
      {
        icon: <SiKubernetes />,
        title: 'Kubernetes',
        href: 'https://kubernetes.com',
        color: '#2496ED',
      },
      {
        icon: <SiNginx />,
        title: 'Nginx',
        href: 'https://nginx.org',
        color: '#009639',
      },
    ],
  },
  {
    color: '#050000ff',
    title: 'APP Grupo NTSec - API',
    description:
      'API backend para integração e suporte ao aplicativo do Grupo NTSec',
    detailedInfo:
      'API backend robusta desenvolvida para suportar o aplicativo móvel do Grupo NTSec. A API fornece endpoints seguros para autenticação, gerenciamento de dados, notificações e integração com outros sistemas corporativos, garantindo alta disponibilidade e escalabilidade.',
    isPrivate: true,
    technologies: [
      {
        icon: <SiPython />,
        title: 'Python',
        href: 'https://python.org',
        color: '#3776AB',
      },
      {
        icon: <SiDjango />,
        title: 'Django',
        href: 'https://djangoproject.com',
        color: '#092E20',
      },
      {
        icon: <SiGunicorn />,
        title: 'Gunicorn',
        href: 'https://gunicorn.org',
        color: '#499848',
      },
      {
        icon: <TbBrandOpenSource />,
        title: 'OpenTelemetry',
        href: 'https://opentelemetry.io',
        color: '#425CC7',
      },
      {
        icon: <SiPostgresql />,
        title: 'PostgreSQL',
        href: 'https://postgresql.org',
        color: '#4169E1',
      },
      {
        icon: <SiDocker />,
        title: 'Docker',
        href: 'https://docker.com',
        color: '#2496ED',
      },
      {
        icon: <SiKubernetes />,
        title: 'Kubernetes',
        href: 'https://kubernetes.com',
        color: '#2496ED',
      },
    ],
  },
]
