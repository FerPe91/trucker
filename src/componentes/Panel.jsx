import React from 'react'
import Boton from './Boton'
import datosChoferes from '../helpers/datosChoferes'
import { useState } from 'react'

const Panel = (props) => {
  const [datos, setDatosChoferes] = useState([]);
  const agregarChofer = (nombre) => {
    console.log("hijo de puta");
    setDatosChoferes(datos.push(nombre));
  };

  return (
    <div className='d-flex justify-content-between'>

      <div className='border rounded p-3'>
        <h2>{props.titulo}</h2>
        <div className='border rounded p-3'>
          <ul>
            {datos.map((elemento, index) => (
            <li key={index}>{elemento}</li>
            ))}
          </ul>{
              props.tieneBoton === 'true' ? <Boton boton="+" datos={datosChoferes} /> : null
            }
        </div>            
      </div>
    </div>

  )
}

export default Panel;