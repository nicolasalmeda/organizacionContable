import React from 'react';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<ShoppingCart/>} />
         
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
