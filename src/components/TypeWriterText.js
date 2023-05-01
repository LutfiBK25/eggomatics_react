import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;


span{
  text-transform: uppercase;
  font-family: 'Akaya Telivigala', cursive;
}
.text-1{
  color: purple;
}
.text-2{
  color: purple;
}
.text-3{
  color: purple;
}

@media (max-width: 70em) {
  font-size: ${props => props.theme.fontxl};

}
@media (max-width: 48em) {
  align-self: center;
  text-align: center;
}
@media (max-width: 40em) {
  width: 90%;
}

`
const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
font-size: ${props => props.theme.fontmd};

}

@media (max-width: 48em) {
  align-self: center;
  text-align: center;
}

`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
  align-self: center;
  text-align: center;

  button{
    margin: 0 auto;
  }
}
`


const TypeWriterText = () => {
  return (
    <>
    <Title>
        Let The Mayhem Begin
        <Typewriter
        options = {{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
        typewriter.typeString('<span class ="text-1">Its Simple</span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class ="text-2">One Winner</span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class ="text-3">One Million Dollar</span>')
        .pauseFor(2000)
        .deleteAll()
        .typeString('<span class ="text-3">Do You Think You Have What It Takes</span>')
        .pauseFor(2000)
        .deleteAll()
        .start()
        }}
        />
      
    </Title>
    <SubTitle>
    Don't Crack Under Pressure
    </SubTitle>
    <ButtonContainer>
    <Button text="Mint (Open Soon)" link="null" />
    </ButtonContainer>
    
    </>

    
    
  )
}

export default TypeWriterText