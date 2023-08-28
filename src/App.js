import './App.css';
import Panel from './componentes/Panel';
import datosChoferes from './helpers/datosChoferes';
import datosCarga from './helpers/datosCargas'
import datosOcupados from'./helpers/datosOcupados'
import { useState } from 'react';

function App() {
  const [choferes, setChoferes] = useState(datosChoferes);
  console.log(datosChoferes);
  const agregarChofer = (nombre) => {
    setChoferes([...choferes, nombre]);
    console.log(choferes);
  };

  return (
    <div className="d-flex justify-content-between">
      <Panel datos={datosChoferes} manejarClic={agregarChofer} titulo={"Choferes disponibles"} tieneBoton='true'/>
      <Panel datos={datosCarga} titulo={"Cargas disponibles"} tieneBoton='true'/>
      <Panel datos={datosOcupados} titulo={"Choferes en viaje"} />
    </div>
  );
}

export default App;
