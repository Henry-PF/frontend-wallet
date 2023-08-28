import { Route, Routes } from 'react-router-dom';
import Home from './components/Landing_Page/Home/Home';
import UserHome from './components/User_Panel/Home/UserHome';
import MiBilletera from './components/User_Panel/MiBilletera/Mi_Billetera';
import Transferencias from './components/User_Panel/Transferencias/Transferencias';
import Settings from './components/User_Panel/Settings/Settings';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import AboutUs from './components/Landing_Page/About_Us/AboutUs';
import QrGenerator from "./components/QrPage/QrGenerator/QrGenerator" // Generador de Qr
import NuevaTransferencia from "./components/TransferenciaForm/NuevaTransferencia/NuevaTransferencia" // Formulario de transferencia
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about_us' element={<AboutUs/>} />
        <Route exact path='/dashboard' element={<UserHome/>} />
        <Route exact path='/dashboard/mi_billetera' element={<MiBilletera/>} />
        <Route exact path='/dashboard/transferencia' element={<Transferencias/>} />
        <Route exact path='/dashboard/settings' element={<Settings/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/recoverPassword' element={<RecoverPassword/>} />
      </Routes>
    </div>
  );
}

export default App;
