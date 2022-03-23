import React from 'react';
import 'antd/dist/antd.css';
import Navbar from "./Components/NavBar/Navbar";
import GlobalStyle from './GlobalStyle';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>

    <BrowserRouter>
    <GlobalStyle/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/serve' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
   
    


    </>
  
  );
}

export default App;
