import type { ReactNode } from 'react'
import './TechBadge.css'

export interface TechBadgeProps {
  icon: ReactNode
  title: string
  href: string
  color?: string
}

const TechBadge: React.FC<TechBadgeProps> = ({
  icon,
  title,
  href,
  color = '#ffffff',
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='tech-badge'
      style={{ '--badge-color': color } as React.CSSProperties}
      title={title}
      onClick={(e) => e.stopPropagation()}
    >
      <span className='tech-badge__icon'>{icon}</span>
      <span className='tech-badge__title'>{title}</span>
    </a>
  )
}

export default TechBadge
