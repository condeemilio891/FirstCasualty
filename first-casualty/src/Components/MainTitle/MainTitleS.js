import styled from "styled-components";

// containers
export const MTSContainer= styled.div`

display: flex;
justify-content: space-around;
height: 125px;

`

export const TitleContainerLeft= styled.div`
display: flex;
flex-direction:row;
background-image: linear-gradient(#FFFFFF, #0086BE);
align-items: center;
justify-content: center;
width:50%;
`
export const TitleContainerCenter= styled.div`
display: flex;
flex-direction:column;
background-image: linear-gradient(#FFFFFF, #000000);
align-items: center;
justify-content: center;
width: 33%;
height: 70%;
z-index: 8;
`
export const TitleContainerRight= styled.div`
display:flex;
flex-direction: row;
width: 50%;
align-items: center;
justify-content: center;
background-image: linear-gradient(#000000, #007a3d);
`

// HEaders
export const MTS= styled.h1`

font-size: 3rem;
/* padding-left: 40px; */
color: ${(props) => props.textColor || 'black'};
text-align: center;
// responsive
@media (max-width: 800px) {
    font-size: 1.5rem;
  }
  z-index: 10;
  align-self: center;
  justify-self: center;
  /* position: absolute;
  right: 50; */
  font-size: 30px;
`


export const MainSubtitle=styled.h1`

font-size:2rem;
@media (max-width: 800px) {
    font-size: 1rem; 
  }
`


// Pictures
export const TitlePic =styled.img`
height: 100%;
  width: 50%;
  padding-bottom: 2%;
  border: ${(props) => `${props.borderWidth || '2px'} ${props.borderStyle || 'solid'} ${props.borderColor || 'white'}`};
align-self: flex-start;
justify-self: flex-start;

`