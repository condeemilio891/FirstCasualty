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
justify-content: flex-start;
width:50%;
`
export const TitleContainerCenter= styled.div`
display: flex;
flex-direction:column;
background-image: linear-gradient(#FFFFFF, #000000);
align-items: flex-start;
justify-content: center;
width: 0%;
`
export const TitleContainerRight= styled.div`
display:flex;
flex-direction: row;
width: 50%;
align-items: center;
justify-content: flex-start;
background-image: linear-gradient(#000000, #007a3d);
`

// HEaders
export const MTS= styled.h1`

font-size: 3rem;
padding-left: 40px;
color: ${(props) => props.textColor || 'black'};
// responsive
@media (max-width: 800px) {
    font-size: 1.5rem;
  }
`


export const MainSubtitle=styled.h1`

font-size:2rem;
@media (max-width: 800px) {
    font-size: 1rem; 
  }
`


// Pictures
export const TitlePic =styled.img`
height: 75px;
  width: 150px;
  padding-bottom: 2%;
  border: 1px solid white;
align-self: flex-start;
justify-self: flex-start;

`