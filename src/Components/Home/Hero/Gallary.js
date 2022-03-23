import React from 'react'
import styled from 'styled-components';
import gallary1 from '../../Images/gallary1.jpg';
import gallary2 from '../../Images/gallary2.jpg';
import gallary3 from '../../Images/gallary3.jpg';
import gallary4 from '../../Images/gallary4.jpg';
import gallary5 from '../../Images/gallary5.jpg';
import gallary6 from '../../Images/gallary6.jpg';
import gallary7 from '../../Images/gallary7.jpg';
import gallary8 from '../../Images/gallary8.jpg';


const Gallary = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <GallaryHolder>
      <GalleryContainer>

         <GalleryHeader>
             Our Event Gallary
         </GalleryHeader>

         <GallaryImageHolder>

           <GallaryImageUpper>
             <GallaryImage1 src={gallary1}/>
             <GallaryImage2 src={gallary2}/>
             <GallaryImage3 src={gallary3}/>
             <GallaryImage4 src={gallary4}/>
           </GallaryImageUpper>

           <GallaryImageLower>
             <GallaryImage5 src={gallary5}/>
             <GallaryImage6 src={gallary6}/>
             <GallaryImage7 src={gallary7}/>
             <GallaryImage8 src={gallary8}/>
           </GallaryImageLower>


         </GallaryImageHolder>

      </GalleryContainer>
    </GallaryHolder>
   

   
     
   
    
    </>
  )
};

export default Gallary;

const GallaryHolder = styled.div`
width: 100%;

`

const GalleryContainer = styled.div`
width: 100%;

`

const GalleryHeader = styled.h1`
text-align: center;
backgroung-color: red;
font-size: 40px;
font-weight: bold;

`

const GallaryImageHolder = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: space-around;

`

const GallaryImageUpper = styled.div`

`

const GallaryImageLower = styled.div`

`

const GallaryImage1 = styled.img`
width: 25%

`
const GallaryImage2 = styled.img`
width: 25%

`
const GallaryImage3 = styled.img`
width: 25%;

`
const GallaryImage4 = styled.img`
width: 25%;

`
const GallaryImage5 = styled.img`
width: 25%;

`
const GallaryImage6 = styled.img`
width: 25%;

`
const GallaryImage7 = styled.img`
width: 25%;

`

const GallaryImage8 = styled.img`
width: 25%;

`