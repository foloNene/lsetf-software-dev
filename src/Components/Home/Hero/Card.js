import React from 'react'
import styled from 'styled-components'


const Card = (props) =>{
 return(
  <>
  <CardHolder style={{backgroundColor:props.col}}>
   <AvartarHold>
    LOGO
   </AvartarHold>
   <CardHeading>
    {props.Heading}
   </CardHeading>
   <CardPara>
    {props.Paragraph}
   </CardPara>
   </CardHolder>

 
  </>
 );
};

export default Card;


const CardHolder = styled.div`
width: 30%;
height: 400px;
text-align: center;
 padding-top: 20px;
 padding-right: 30px;
 padding-bottom: 40px;
 padding-left: 30px;

`

const AvartarHold = styled.div`
 font-size: 50px;
 color: white;



`

const CardHeading = styled.div`
font-size: 50px;
color: white;


`

const CardPara = styled.div`
color: white;
text-align: center;
font-size: 20px


`