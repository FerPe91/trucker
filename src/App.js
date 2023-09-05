import './App.css';
import CardList from './componentes/CardList';


function App(){  

  return (
    <div className='App'>
      <h1>Aplicacion de transporte</h1>
      <div className='contenedor-principal'>
        <CardList tittle='CHOFERES' />
        <CardList tittle='CARGAS' />
        <CardList tittle='EN VIAJE' />
      </div>
    </div>
  );
}

export default App;
