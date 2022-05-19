import React from 'react'
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";



function App() {

  return (
  
        <BrowserRouter>
              <div className="container mt-3">
             <Navbar />
             <br/>

            <Routes>
              <Route element={<Pokemones />} path='/' exact/>
              <Route element={<Login />} path='/login' exact/>
                 
              
            </Routes>
  
      </div>  
         </BrowserRouter>
         
  );
}

export default App;
