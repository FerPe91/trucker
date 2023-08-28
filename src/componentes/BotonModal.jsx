import React from 'react'

const BotonModal = ({texto, agregarChofer}) => {
  return (
    <div>
        <button className="btn btn-primary" type='button' onClick={agregarChofer}>
            {texto}
        </button>
    </div>
  )
}

export default BotonModal
