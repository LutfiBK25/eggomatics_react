import React from 'react'
import styled from 'styled-components'
import Video from '../assets/Home Video.mp4'
import GIF from '../assets/Home Video GIF.gif'

const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
img{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`
        //if i dont want to use the gif here is the video code
        ///<video autoPlay muted loop playsinline>
        //<source src={Video}/>
        //</video>

const CoverVideo = () => {
  return (
    <VideoContainer>
        
        <img src={GIF} alt="Home Video" />

    </VideoContainer>
  )
}

export default CoverVideo