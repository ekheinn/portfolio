import Lanyard from '../Lanyard/Lanyard'
import './CurrentJobSection.css'

function CurrentJobSection() {
  return (
    <div id='current-job'>
      <div id='lanyard-object'>
        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 10]} fov={15} />
      </div>
      <div id='current-job-text'>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facilis, animi!
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          sit quisquam beatae esse itaque quo at! Obcaecati amet adipisci
          odio cupiditate placeat sint quibusdam odit reiciendis quisquam
          aliquid, quam dignissimos!
        </p>
        <button>Ver mais</button>
      </div>
    </div>
  )
}

export default CurrentJobSection

