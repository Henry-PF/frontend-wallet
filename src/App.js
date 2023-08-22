import { Route, Routes } from 'react-router-dom';
import Home from './components/Landing_Page/Home/Home';
import UserHome from './components/User_Panel/Home/UserHome';
import MiBilletera from './components/User_Panel/MiBilletera/Mi_Billetera';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<UserHome />} />
        <Route exact path='/mi_billetera' element={<MiBilletera/>} />
      </Routes>
    </div>
  );
}

export default App;
