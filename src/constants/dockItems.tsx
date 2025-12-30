import { FaHome, FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TbCodeCircle2Filled } from 'react-icons/tb'

export const useDockItems = () => {
  const navigate = useNavigate()

  return [
    {
      icon: <FaHome size={25} />,
      label: 'Home',
      onClick: () => navigate('/'),
    },
    {
      icon: <TbCodeCircle2Filled size={25} />,
      label: 'Projetos',
      onClick: () => navigate('/projects'),
    },
    {
      icon: <FaLinkedin size={25} />,
      label: 'LinkedIn',
      onClick: () =>
        window.open('https://www.linkedin.com/in/heitor-moreira/', '_blank'),
    },
  ]
}
