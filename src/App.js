import './App.css';
import Panel from './componentes/Panel';
import datos from './helpers/DatosChoferes';
import datosCarga from './helpers/DatosCargas'
import datosOcupados from'./helpers/DatosEnViaje'
import { useState } from 'react';

function App() {
  const [choferes, setChoferes] = useState([datos]);

  const agregarChofer = (nombre) => {
    setChoferes([...choferes, nombre]);
  };



  return (
    <div className="d-flex justify-content-between">
      <Panel datos={datos} manejarClic={agregarChofer} titulo={"Choferes disponibles"} tieneBoton='true'/>
      <Panel datos={datosCarga} titulo={"Cargas disponibles"} tieneBoton='true'/>
      <Panel datos={datosOcupados} titulo={"Choferes en viaje"} />
    </div>
  );
}

export default App;
