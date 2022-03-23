import React from 'react';
import styled from 'styled-components';
import {BiPhone} from 'react-icons/bi';
import {IoLogoFacebook} from 'react-icons/io';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <FooterHolder>
     <FooterContainer>

      <FooterFirstColumn>
       <FooterLogo>
        Logo
       </FooterLogo>
       <FootFirstPara>
        At the core od our values is the <br/>
        uttmost goal of making individual <br/>
        lives, whether old young, and  <br/>
        Communities of people, better than <br/>
        we need it.
       </FootFirstPara>
      </FooterFirstColumn>

      <FooterSecondColumn>
       MAIN LINKS
       <br/>
       <br/>
       HOME
       <br/>
       ABOUT
       <br/>
       CONTACT
       <br/>
       BlOG
       <br/>
       DONATE
      </FooterSecondColumn>

      <FooterThirdColumn>
       GET IN TOUCH
       <br/>
       <br/>
       <FootCeller>
        <FootCell> <BiPhone/> </FootCell> <div>+2348186793482 </div>
       </FootCeller>
       <br/>
       Foundation@gmail.com
       <br/>
       <br/>
        OUR SOCIAL LINKS
       <br/>
       <FootIcon> 
        <FB><IoLogoFacebook/></FB> <IG><FiInstagram/></IG> </FootIcon>
      
      </FooterThirdColumn>
      <FooterFourthColumn>
       GET LATEST UPDATE
       <br/>
        <br/>
       Email
       <br/>
      
       <FooterInput>

       </FooterInput>
       <br/>
       <br/>
       <FooterButton>
        Donate
       </FooterButton>
      </FooterFourthColumn>


     </FooterContainer>
    </FooterHolder>
    
    </>
  )
}

export default Footer;

const FooterHolder = styled.div`
width: 100%;
// background-color: red;
color: white;
font-size: large;
font-size: 20px;




`

const FooterContainer = styled.div`
background-color: blue;
width: 100%;

display:flex;
justify-content: space-around;
padding-top: 25px;

`

const FooterFirstColumn = styled.div`

`

const FooterLogo = styled.div`
font-weight: bold;
font-size: 30px;

`

const FootFirstPara = styled.p`
font-size: 14px;

` 
const FooterSecondColumn = styled.div`

`
const FooterThirdColumn = styled.div`

`

const FooterFourthColumn = styled.div`

`

const FooterInput = styled.input`

`
const FooterButton = styled.button`
border: bone;
background-color: green;
text-align: center;
border-radius: 8px;
text-decoration: none;
font-size:16px;
padding: 12px 25px;
`

const FootCell = styled.div`
color: green;
font-size: 30px;
`

const FootCeller = styled.div`
display: flex;
`

const FootIcon = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
`

const FB = styled.div`

color: #25AAE2;
`

const IG = styled.div`
color: pink;
`