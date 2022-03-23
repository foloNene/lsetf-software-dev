import React from 'react';
import './Slide.css';
import { Carousel } from 'antd';



function Slide () {
 return (
  <>
   <Carousel autoplay>
    <div className='Slide1'>
      <div className='SliderWord'> 

      <div><h2 className='SliderHeader'>We make lives and <br/> Communities
      better </h2></div>
      <p  className='SliderPara'>At the core of our values, is the utmost goal of making <br/> indiviual lives, whether old or young, and 
      community of <br/> people, better than we meet it
        </p>
        <div className='SliderButtonHolder'>
          <div><button className='Donate'>Donate</button></div>
         <div> <button className='ReadMore'>Read More</button></div>
        </div>
        </div>
        
    </div>

    <div className='Slide2'>
      <div>Hello Am The 2nd  </div>
    </div>
    <div className='Slide1'>
      <div>Hello Am the 3rd</div>
    </div>
    <div className='Slide2'>
      <div>Hello Am The 4th</div>
    </div>
  </Carousel>,

  

  </>
 )
}

export default Slide;