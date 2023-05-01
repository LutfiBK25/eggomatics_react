import React, { useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'


import ETH from '../../assets/icons8-ethereum-48.png'

import img1 from '../../assets/Nfts/ShowCase/500.png'
import img2 from '../../assets/Nfts/ShowCase/1338.png'
import img3 from '../../assets/Nfts/ShowCase/2673.png'
import img4 from '../../assets/Nfts/ShowCase/3624.png'
import img5 from '../../assets/Nfts/ShowCase/4611.png'
import img6 from '../../assets/Nfts/ShowCase/5026.png'
import img7 from '../../assets/Nfts/ShowCase/6351.png'
import img8 from '../../assets/Nfts/ShowCase/8717.png'
import img9 from '../../assets/Nfts/ShowCase/13608.png'
import img10 from '../../assets/Nfts/ShowCase/15332.png'



const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
 animation-duration: 20s;

 @media (max-width: 30em){
  animation-duration: 15s;

 }
}
&>*:last-child{
 animation-duration: 15s;

 @media (max-width: 30em){
  animation-duration: 10s;
 }
}
`
const move = keyframes`
0%{ transform: translateX(100%)};
100% {transform: translateX(-100%)}
`

const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
 }
@media (max-width: 30em){
  width: 10rem;
 }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
 }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`


const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}

  return(
    <ImgContainer   onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="EggOMatics"/>
      <Details>
        <div>
          <span>EggOMatics</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
          <img src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(2)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={500} price={0.25} passRef = {Row1Ref}/>
        <NftItem img={img2} number={1338} price={0.25} passRef = {Row1Ref}/>
        <NftItem img={img4} number={3624} price={0.25} passRef = {Row1Ref}/>
        <NftItem img={img5} number={4611} price={0.25} passRef = {Row1Ref}/>
        <NftItem img={img6} number={5026} price={0.25} passRef = {Row1Ref}/>


      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img7} number={6351} price={0.25} passRef = {Row2Ref}/>
        <NftItem img={img8} number={8717} price={0.25} passRef = {Row2Ref}/>
        <NftItem img={img9} number={13608} price={0.25} passRef = {Row2Ref}/>
        <NftItem img={img3} number={2673} price={0.25} passRef = {Row2Ref}/>
        <NftItem img={img10} number={15332} price={0.25} passRef = {Row2Ref}/>
      </Row>
    </Section>
  )
}

export default Showcase