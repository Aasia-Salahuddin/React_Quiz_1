import React from 'react';

import Navbar from './Components/NavBar'; 
import About from './Components/About'; 
import Contact from './Components/Contact';
import  Footer  from './Components/Footer';
import Offerings from './Components/Offerings'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
   
    <About/>
    <Contact/>
    <Offerings/>
    <Footer/>
    </>
  
  );
}

export default App;
