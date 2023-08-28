import React from 'react'
import '../helpers/datosChoferes'
import BotonModal from './BotonModal'


const Formulario = (props) => {

  return (
    <div>
			<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
									<h5 className="modal-title" id="modalLabel">Formulario</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
									</button>
							</div>
							<div className="modal-body">
									<h1>formulario</h1>
									<form>
										<div className="form-group">
												<label htmlFor="apellido">Apellido</label>
												<input type="text" className="form-control" value={props.inputChofer} onChange={props.capturarValor} id="apellido" placeholder="Apellido" />
										</div>
									</form>
							</div>
							<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
									<BotonModal texto={"Agregar"}/>
							</div>
						</div>
				</div>
			</div>
			{/* 	<div className="form-group">
						<label htmlFor="nombre">Nombre</label>
						<input type="text" className="form-control" id="nombre" placeholder="Nombre" />
				</div> */}
    </div>
  )
}

export default Formulario