import React from 'react'

const BotonModal = ({texto, agregarChofer, inputChofer}) => {
  return (
    <div>
        <button className="btn btn-primary" texto={texto} type='button' input={inputChofer} manejarClick={agregarChofer}>
            {texto}
        </button>
    </div>
  )
}

export default BotonModal
