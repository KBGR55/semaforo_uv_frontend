import './App.css';
import {  Route,  Routes} from 'react-router-dom';
import Inicio from './fragment/Inicio';
import Api from './fragment/Api';
import Login from './fragment/Login';
import Registro from './fragment/Registro';
import RadiacionUv from './fragment/RadiacionUv'

function App() {
  return (
    <Routes> 
        <Route path='/' element={<Inicio/>} />
        <Route path='/api' element={<Api/>} />
        <Route path='/iniciar-sesion' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/radiacion' element={<RadiacionUv/>} />
      </Routes>
  );
}

export default App;