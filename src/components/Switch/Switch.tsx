import './Switch.css'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  id?: string
}

function Switch({ checked, onChange, label, id = 'switch' }: SwitchProps) {
  const handleChange = () => {
    onChange(!checked)
  }

  return (
    <div className='switch-container'>
      <label className='switch'>
        <input
          type='checkbox'
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        <span className='switch-track'></span>
        <span className='switch-thumb'></span>
      </label>
      {label && (
        <label htmlFor={id} className='switch-label'>
          {label}
        </label>
      )}
    </div>
  )
}

export default Switch
