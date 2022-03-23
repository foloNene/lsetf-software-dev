import styled from 'styled-components'
import React from 'react'
import Card from './Card'

const CardDisplay = () => {
 return(
  <>
  <CardDiplayHolder>
     <Card Heading="OUR MISSION"
     Paragraph="At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of poeple,better than we meet it.
    old or you"
    col='blue'/>
    
     <Card Heading="OUR VISION"
     Paragraph="At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of poeple,better than we meet it.
    old or you"
    col='red'/>
     
     <Card Heading="VOLUNTEER"
     Paragraph="At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of poeple,better than we meet it.
    old or you"
    col='green'/>
   
  </CardDiplayHolder>
  
  </>
 );
};

export default CardDisplay;

const CardDiplayHolder = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
position: absolute;
bottom:-20% ;
text-align: center;



`