import { VscArchive, VscHome } from 'react-icons/vsc'
import { FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const useDockItems = () => {
  const navigate = useNavigate()

  return [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      icon: <VscArchive size={18} />,
      label: 'Projetos',
      onClick: () => navigate('/projects'),
    },
    {
      icon: <FaLinkedin size={18} />,
      label: 'LinkedIn',
      onClick: () =>
        window.open('https://www.linkedin.com/in/heitor-moreira/', '_blank'),
    },
  ]
}
