import styled from "styled-components";

// containers
export const MTSContainer= styled.div`

display: flex;
justify-content: space-around;
/* margin-left:20px;
margin-right: 20px; */

padding-bottom: .5%; 
`

export const TitleContainerLeft= styled.div`
display: flex;
flex-direction:column;
background-image: linear-gradient(#FFFFFF, #0086BE);
align-items: center;
justify-content: center;
width:45%;
`
export const TitleContainerCenter= styled.div`
display: flex;
flex-direction:column;
background-image: linear-gradient(#FFFFFF, #000000);
align-items: center;
justify-content: center;
width: 10%;
`
export const TitleContainerRight= styled.div`
display:flex;
flex-direction: column;
width: 45%;
align-items: center;
justify-content: center;
background-image: linear-gradient(#000000, #007a3d);

`

// HEaders
export const MTS= styled.h1`

font-size: 3rem;
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
 height: 50px;
 width: 100px;
 padding-bottom: 2%;
 border: 1px solid white;
`