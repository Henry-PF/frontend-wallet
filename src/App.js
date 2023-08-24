import { Route, Routes } from 'react-router-dom';
import Home from './components/Landing_Page/Home/Home';
import UserHome from './components/User_Panel/Home/UserHome';
import Transferencias from './components/User_Panel/Transferencias/Transferencias';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import About from './components/Landing_Page/About/About';
import Baja from './components/Baja/Baja';

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<UserHome />} />
        <Route exact path='/dashboard/transferencia' element={<Transferencias />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/recoverPassword' element={<RecoverPassword/>} />
        {/* <Route exact path='/unsubscribeUser' element={<Baja/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
