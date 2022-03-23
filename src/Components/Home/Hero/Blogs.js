import React from 'react';
import styled from 'styled-components';
import image6 from '../../Images/image6.jpg';
import image7 from '../../Images/image7.jpg';
import image8 from '../../Images/image8.jpg';

const Blogs = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <BlogsHeader>Check out Our Latest Blog</BlogsHeader>
    <BlogsHolderContainer>
      <BlogsImageHolder>
     <BlogsImageHold1>

        <BlogsImage1 src={image6}/>

     </BlogsImageHold1>

     <BlogsImageHold2>

        <BlogsImage2 src={image7}/>

     </BlogsImageHold2>

     <BlogsImageHold3>

        <BlogsImage3 src={image8}/>

     </BlogsImageHold3>

    </BlogsImageHolder>

    <CharityWhole>

    <CharityCardContainer>
    <CharityCardHolder>
       <CharityCardHeader>
          Donating To Charity
       </CharityCardHeader>
       <br/>
       <CharityCardPara>
          We believe everyOne should be able to live <br/>
          deginity, without dependence, we are <br/>a non Governmental
          Organisation
       </CharityCardPara>
       <CharityCardButtom>
          <CharityCardYear>
             Jananuary 2022
          </CharityCardYear>
            <CharityCardButton>
               ReadMore
            </CharityCardButton>
       </CharityCardButtom>

    </CharityCardHolder>
   </CharityCardContainer>

   <CharityCardContainer1>
    <CharityCardHolder1>
       <CharityCardHeader1>
          Donating To Charity
       </CharityCardHeader1>
       <br/>
       <CharityCardPara1>
          We believe everyOne should be able to live <br/>
          deginity, without dependence, we are <br/>a non Governmental
          Organisation
       </CharityCardPara1>
       <CharityCardButtom1>
          <CharityCardYear1>
             Jananuary 2022
          </CharityCardYear1>
            <CharityCardButton1>
               ReadMore
            </CharityCardButton1>
       </CharityCardButtom1>

    </CharityCardHolder1>
   </CharityCardContainer1>

   <CharityCardContainer2>
    <CharityCardHolder2>
       <CharityCardHeader2>
          Donating To Charity
       </CharityCardHeader2>
       <br/>
       <CharityCardPara2>
          We believe everyOne should be able to live <br/>
          deginity, without dependence, we are <br/>a non Governmental
          Organisation
       </CharityCardPara2>
       <CharityCardButtom2>
          <CharityCardYear2>
             Jananuary 2022
          </CharityCardYear2>
            <CharityCardButton2>
               ReadMore
            </CharityCardButton2>
       </CharityCardButtom2>

    </CharityCardHolder2>
   </CharityCardContainer2>

   </CharityWhole>


    </BlogsHolderContainer>


   
    </>
  )
}

export default Blogs;

const BlogsHeader = styled.h1`
text-align: center;
font-weight: bold;
font-size: 40px;

`
const BlogsHolderContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
position: relative;

`

const BlogsImageHolder = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

`
const BlogsImageHold1 = styled.div`
width: 33%;
`

const BlogsImageHold2 = styled.div`
width: 33%;
`

const BlogsImageHold3 = styled.div`
width: 33%;
border-radius: 8px;
`

const BlogsImage1 = styled.img`
height: 600px;
width: 100%;
border-radius: 8px;

`

const BlogsImage2 = styled.img`
height: 600px;
width: 100%;
border-radius: 8px;
`

const BlogsImage3 = styled.img`
height: 600px;
width: 100%;
border-radius: 8px;

`

const CharityWhole = styled.div`
display: flex;
justify-content: space-around;


`
      
const CharityCardContainer = styled.div`
width: 33%;
background-color:	rgb(0,0,205, 0.6);
color: white;
position: absolute;
top: 360px;

`

const CharityCardHolder = styled.div`
width: 85%;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
padding: 8px;

`

const CharityCardHeader = styled.h2`

   height: 30px;
   font-size: 40px;
   align-items: center;
   font-weight: bold;
   color: white;

`
const CharityCardPara = styled.div`
align-items: center;
font-size: 20px;
font-weight: bold;

`
const CharityCardYear = styled.div`
font-size: 20px;


`

const CharityCardButtom = styled.div`
display:flex;
justify-content: space-around;
align-items: center;

`


const CharityCardButton = styled.button`
font-size: 20px;
padding: 12px 28px;
border-radius: 8px;
color: white;
background-color: green;
`


const CharityCardContainer1 = styled.div`
width: 33%;
background-color:	rgb(0,0,205, 0.6);
color: white;
 position: absolute;
top: 360px;
left: 0px;

`

const CharityCardHolder1 = styled.div`
width: 85%;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
padding: 8px;

`

const CharityCardHeader1 = styled.h2`

   height: 30px;
   font-size: 40px;
   align-items: center;
   font-weight: bold;
   color: white;

`
const CharityCardPara1 = styled.div`
align-items: center;
font-size: 20px;
font-weight: bold;

`
const CharityCardYear1 = styled.div`
font-size: 20px;


`

const CharityCardButtom1 = styled.div`
display:flex;
justify-content: space-around;
align-items: center;

`


const CharityCardButton1 = styled.button`
font-size: 20px;
padding: 12px 28px;
border-radius: 8px;
color: white;
background-color: blue;
`


const CharityCardContainer2 = styled.div`
width: 33%;
background-color:	rgb(0,0,205, 0.6);
color: white;
 position: absolute;
top: 360px;
right: 0px;

`

const CharityCardHolder2 = styled.div`
width: 85%;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
padding: 8px;

`

const CharityCardHeader2 = styled.h2`

   height: 30px;
   font-size: 40px;
   align-items: center;
   font-weight: bold;
   color: white;

`
const CharityCardPara2 = styled.div`
align-items: center;
font-size: 20px;
font-weight: bold;

`
const CharityCardYear2 = styled.div`
font-size: 20px;


`

const CharityCardButtom2 = styled.div`
display:flex;
justify-content: space-around;
align-items: center;

`


const CharityCardButton2 = styled.button`
font-size: 20px;
padding: 12px 28px;
border-radius: 8px;
color: white;
background-color: red;
`