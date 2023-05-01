import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}

`;

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};

}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};

}
`

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: ${props => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em){
  width: 80%;
}

@media (max-width: 48em){
  width: 90%;
}
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.div`
list-style:none;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media (max-width: 48em){
  width: 90%;
  
}



&>*:nth-of-type(2n +1){
  justify-content: start;

  @media (max-width: 48em){
    justify-content: center;
  }
  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
    @media (max-width: 48em){
      border-radius: 0 50px 0 50px;
    text-align: left;

    p{
      border-radius: 0 40px 0 40px ;
      }
    } 
    
  }
  p{
    border-radius: 40px 0 40px 0;
  }

}

&>*:nth-of-type(2n){
  justify-content: end;
  @media (max-width: 48em){
    justify-content: center;
  }

  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
   
  }
  p{
    border-radius: 0 40px 0 40px ;
  }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em){
  justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em){
  width: 70%;
}
`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
display : block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 40em){
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`;
const Text = styled.span`
display : block;
font-size: ${props => props.theme.fontsm};
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxs};
}
`;


const RoadMapItem = ({title, subtext,addToRef }) => {

  return(
    <Item ref ={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
  revealRefs.current.forEach( (el, index) => {

    t1.fromTo(
      el.childNodes[0],
      {
        y: '0'
      },{
        y: '-30%',

        scrollTrigger:{
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=200px',
          end:'bottom center',
          scrub:true,
      
        }
      }
    )


  } )
  
    return () => {
      
    };
  }, [])

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <SubText>
          We established some checkpoints for this long and interesting run. These checkpoints are connected to the minting percentage of the collection.However, finishing this roadmap does not mean the ned of the journey. The website will change its looks after every checkpoint is reached.Always remember, progress needs patience and do not forget to enjoy the good vibes within our community. Every step of this journey is going to be more challenging than the last, so be ready for an adventure.
      </SubText>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRef={addToRefs} title = "The Chicken or The Egg? (20%)" subtext="In this case, It's the egg. Claim your EggOMatic charachter. After achieving every goal, we are giving 10% back to the charity and will be presented on discord. As well as this, we will be doing some giveaways. The rest will be used for games and prizes for our valuable players." />
          <RoadMapItem addToRef={addToRefs} title = "These Eggs are getting bigger (40%)" subtext="It is finally time for everyone to be introduced to the game devlopment and rules. all players will get a chance to have a sneak peak at the game. there will also be bigger giveaways this time; like REALLY big. Game makers will also provide players a similar game to see how our gameplay will be. Don't worry, we did not forget about the charity donations!" />
          <RoadMapItem addToRef={addToRefs} title = "Are These Eggs Buggin? (60%)" subtext="Beta is up and ready to be tested. Try out the EggoMatics by hunting for bugs and glitches throughout the gameplay. The first player to locate and report each bug will be rewarded with some dope prizes that will be revealed to the winners as incentive. Good Luck!" />
          <RoadMapItem addToRef={addToRefs} title = "Meet your Fellow EggOMatics (80%)" subtext="Its almost time to hatch! Multiplayer mode will be up and running to give players access to In-Game events where winners will win exotic gifts. it is also easy to host your events if players are up to it" />
          <RoadMapItem addToRef={addToRefs} title = "Will You Crack Under The Pressure?! (100%)" subtext="It's time. Now or Never. Get yourself ready for an epic battle. Fourteen rounds on One Against One. 1 Winner 1 Million Dollar. LET THE MAYHEM BEGIN!!!" />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap