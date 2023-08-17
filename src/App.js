import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        {/* <Home/> */}
        </Routes>
    </div>
  );
}

export default App;
