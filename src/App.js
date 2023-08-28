import './App.css';
import Panel from './componentes/Panel';


function App(){  
  return (
    <div className="d-flex justify-content-between">
      <Panel titulo={"Choferes disponibles"} tieneBoton='true'/>
    </div>
  );
}

export default App;
