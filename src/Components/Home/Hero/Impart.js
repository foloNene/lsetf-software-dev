import React from 'react';
import styled from 'styled-components'
import impart1 from '../../Images/impart1.jpg'
import impart2 from '../../Images/impart2.jpg'
import impart3 from '../../Images/impart3.jpg'
import impart4 from '../../Images/impart4.jpg';
import "./Impart.css"

const Impart = () => {
  return (
   <>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
  <br/>
   <br/>
   <br/>
   <br/>
   <br/>
    <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
    <br/>
   <br/>
   <br/>
   <br/>
   <br/>
    <ImpartHolder>
     <ImpartHeader>Our Impart</ImpartHeader>
     <ImpartBodyContainer>

      <ImpartBodyHolder>
     <ImpartFirstColumn>
      <ImpartDiv>
       We believe everyone should be able to live with diginty, <br/>
       without dependence. we sre a Non-Govermental<br/> Organosation  based in Lagos
       Nigeria. we arrive to <br/> protect and feed the poor, advocate and enlighten<br/>
        communities, empower young people, serve as the <br/>voices to the 
       voiceless, we give grants and scholarship, <br/> we serve as an outstretched arm
       of god, we bring <br/> succor and hope to the need.
      </ImpartDiv>
      <br/>
      <ImpartButton><Ibutton>Read More</Ibutton></ImpartButton>
     </ImpartFirstColumn>

     <ImpartSecondColumn>

      <ImpartImage1 src={impart1}/>
      
     </ImpartSecondColumn>
     <ImpartThirdColumn>

      <ImpartImage2 src={impart2}/>

     </ImpartThirdColumn>

    </ImpartBodyHolder>



     </ImpartBodyContainer>


    </ImpartHolder>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <ImpartLowerHolder>

     <ImpartLowerContainer>

      <ImpartLowerImage src={impart3}/>

     <ImpartLowerColunn2>
      <LowerColumn2Upper>
       Your Support Will Help Us Reach <br/>
       More vulnerable People
      </LowerColumn2Upper>
      <br/>
      <br/>
      <br/>
      <br/>
     
      <LowerColumn2Lower>
       We believe everyone should be able to live with diginty, <br/>
       without dependence. we sre a Non-Govermental<br/> Organosation  based in Lagos
       Nigeria. we arrive to <br/> protect and feed the poor, advocate and enlighten<br/>
        communities, empower young people, serve as the <br/>voices to the 
       voiceless, we give grants and scholarship, <br/> we serve as an outstretched arm
       of god, we bring <br/> succor and hope to the need.
      <br/>
      <br/>
      <ImpartButton><Ibutton2>Donate</Ibutton2></ImpartButton>
      </LowerColumn2Lower>

     </ImpartLowerColunn2>
     </ImpartLowerContainer>

    </ImpartLowerHolder>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Impart3>
     <Impart3Left>
      <Impart3Header>
       Become a Part of Our impact <br/>
       Team, Volunteer!
      </Impart3Header>
      <br/>
      <br/>
      <br/>
       <br/>
      <br/>
       <br/>

      <Impart3ImageHolder> 

       <Impart3Image src={impart4}/>

      </Impart3ImageHolder>
     </Impart3Left>

     <Impart3Right>
      <Impart3Box>
       <Impert3BoxHeader>
        Fill Our Volunteer form
       </Impert3BoxHeader>
       <br/>
       <ImpartBoxName>
        Name
        <br/>
       </ImpartBoxName>
       <input type="text" className='InputName'  placeholder='Enter your First and Last name'/>
       <br/>
        <br/>
        <ImpartBoxEmail>
        Email
       </ImpartBoxEmail>
       
       <input type="text" className='InputEmail'  placeholder='Enter your Email'/>
        <ImpartBoxMessage>
         <br/>
        Leave a message
       </ImpartBoxMessage>
        <textarea type="text" className='InputText' placeholder='Enter your message'/>
         <br/>
          <br/>
           <br/>
        <ImpartButton><Ibutton3>Send</Ibutton3></ImpartButton>

      </Impart3Box>

     </Impart3Right>

    </Impart3>
    

   </>
   
  )
}

export default Impart;

const ImpartHolder =styled.div`
width: 100%;
position: relative;
color: black;
// background-color: red;

`


const ImpartHeader = styled.h1`

   height: 100px;
   font-size: 90px;
   color: black;
   align-items: center;
  // background-color: blue;
  display: flex;
  justify-content: center;

`
const ImpartBodyContainer = styled.div`
width: 100%;
// background-color: pink;
display: flex;
 justify-content: center;
`

const ImpartBodyHolder =styled.div`
 
  width: 100%;
  // background-color: green;
  display: flex;
  justify-content: space-around;

`

const ImpartFirstColumn = styled.div`
align-items: center;

`


const ImpartDiv =styled.div`
font-size: 20px;
font-weight: bold;


`
const ImpartButton = styled.div`
// width: 100%;
//  font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;

`

const Ibutton = styled.button`
  width: 100%;
  font-size: 1.5em;
  // margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 8px;
  color: white;
  background-color: green;

`

const ImpartSecondColumn =styled.div`

`

const ImpartImage1 = styled.img`
width: 600px;
height: 350px;

`

const ImpartThirdColumn = styled.div`

`

const ImpartImage2 = styled.img`
width: 600px;
height: 350px;

`

const ImpartLowerHolder = styled.div`
width: 100%;
display: flex;
// justify-content: center;

`
const ImpartLowerContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

`


const ImpartLowerImage = styled.img`
 width: 45%;
 height: 450px;

`
const ImpartLowerColunn2 = styled.div`
width: 45%;
align-items: center;
font-weight: bold;



`

const LowerColumn2Upper = styled.h1`
   height: 30px;
   font-size: 40px;
   color: black;
   align-items: center;
   font-weight: bold;


`

const LowerColumn2Lower = styled.div`
align-items: center;
font-size: 20px;
font-weight: bold;

`

const Ibutton2 = styled.button`
  width: 75%;
  font-size: 1.5em;
  // margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 8px;
  color: white;
  background-color: blue;

`

const Impart3 = styled.div`
width: 100%;
display: flex;
justify-content: space-around;


`

const Impart3Left = styled.div`
width: 

`
const Impart3ImageHolder = styled.div`
width: 100%;

`

const Impart3Header = styled.h2`
 height: 30px;
   font-size: 40px;
   color: black;
   align-items: center;
   font-weight: bold;

`

const Impart3Image = styled.img`
height: 500px;
width: 100%;

`
const Impart3Right = styled.div`
width: 45%;

 display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 10px 10px 8px 10px #888888
 
`

const Impart3Box = styled.div`
 display: flex;
 flex-direction: column;
  width: 85%;
  height: 100%;
  border: none;
  padding: 2px;
  background-color: white;

`

const Impert3BoxHeader = styled.h2`
   display: flex;
   justify-content: center;
    height: 30px;
   font-size: 40px;
   color: black;
   align-items: center;
   font-weight: light;

`

const ImpartBoxName = styled.div`
font-size: 20px;


`

const ImpartBoxEmail = styled.div`
font-size: 20px;
`

const ImpartBoxMessage = styled.div`
font-size: 20px;

`

const Ibutton3 = styled.button`

  width: 100%;
  font-size: 1.5em;
  // margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 8px;
  color: white;
  background-color: blue;
`
