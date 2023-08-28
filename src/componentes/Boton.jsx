import React from 'react'
import Formulario from './Formulario'

const Boton = (props) => {
  return (
    <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            {props.boton}
        </button>
        <Formulario/>

    </div>
  )
}

export default Boton