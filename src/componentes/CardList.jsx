import React from 'react'
import { useState } from 'react'
import '../style-sheets/CardList.css'

const CardList = (props) => {

  const [choferes, setChoferes] = useState([])
  const [cargas, setCargas] = useState([])
  //hacer un estado para las cargas que se van creando
  

  return (
    <div className='card-container'>
    <div className='card-tittle'>
      <h2 className='tittle'>{props.tittle}</h2>
    </div>
      <div className='card'>
        <div className='lista-choferes'>
          <ul>
            <li>Manuel casas</li>
            <li>Josefina Quiroga</li>
            <li>Andrea Martinoli</li>
            <li>Manuel Perez</li>
            <li>Josefina Gomez</li>
            <li>Andrea Protti</li>
          </ul>     
        </div>
      </div>
      <button class="boton-agregar"><span> Agregar </span></button>
    </div>

  )
}

export default CardList;