import { Route, Routes } from 'react-router-dom';
import Home from './components/Landing_Page/Home/Home';
import UserHome from './components/User_Panel/Home/UserHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dashboard' element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
