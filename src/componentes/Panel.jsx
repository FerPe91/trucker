import React from 'react'
import Boton from './Boton'

const Panel = (props) => {
  const elementos=props.datos
  return (
    <div className='d-flex justify-content-between'>

      <div className='border rounded p-3'>
        <h2>{props.titulo}</h2>
        <div className='border rounded p-3'>
          <ul>
            {elementos.map((elemento, index) => (
            <li key={index}>{elemento}</li>
            ))}
          </ul>{
              props.tieneBoton === 'true' ? <Boton boton="+"/> : null
            }
          
        </div>            
      </div>
          
    </div>

  )
}

export default Panel;