import React from 'react'
import Slider from './Hero/Slide';
import CardDisplay from './Hero/CardDisplay';
import Impart from './Hero/Impart';
import Blogs from './Hero/Blogs';
import Gallary from './Hero/Gallary';
import Footer from './Hero/Footer';



export const Home = () => {
  return (
    <>
    <Slider/>
    <CardDisplay/>
    <Impart/>
    <Blogs/>
    <Gallary/>
    <Footer/>
    </>
    
  )
}

export default Home;