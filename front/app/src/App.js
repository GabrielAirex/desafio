
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Historic from './Pages/Historico'
import React, { Component } from 'react';




function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/historico' element={<Historic />}/>
    </Routes>
  </Router>
    
  );
}

export default App;
