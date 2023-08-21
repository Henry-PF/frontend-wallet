import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';

function App() {


  
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/RecoverPassword' element={<RecoverPassword/>} />
        </Routes>
    </div>
  );
}

export default App;
