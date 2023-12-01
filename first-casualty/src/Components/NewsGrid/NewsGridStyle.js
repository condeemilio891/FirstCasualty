import styled from "styled-components"



export const StyledCarouselContainer = styled.div`

max-width: 25% !important;
max-height: 15% !important ;
margin: auto; 
float: ${(props) => props.float || 'none'};
padding-bottom: 20%;
`;


export const MiddleGridContainer = styled.div`
    display: flex;
  flex-direction:row; /* Adjust the minmax value based on your needs */
  gap: 0%;
justify-content: space-around;

 
`

export const MiddleGridItemContainer= styled.div`
    display: grid;
    column-gap: 1%;
`

export const CardArticle=styled.article`
     position:relative;
     overflow:hidden;

`
export const CardImg= styled.img`
 width:328px;
 max-height:89% ;
 border-radius: 1.5rem;
 position: relative;
 top:0%;
 right:0;
 left:0;
`
export const CardData= styled.div`

width:280px;
   padding: .5rem ;
   box-shadow: 1px 0px 8px rgba(0,0,0,0.3);
   border-radius: 1rem;
   position: absolute;
   bottom: -0;
   top:0;
   left:0;
   right:0;
   margin-inline: auto;
   /* opacity: 10%; */
   transition: opacity 1s 1s;
   color:white;
   background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(255, 255, 255, 0));
  /* You can adjust the angle and colors as needed */
  height: 40vh; 
   
`

export const CardDescription=styled.p`
    display: block;
    font-size: small;
    margin-bottom: .25rem;
`
export const CardTitle=styled.h1`
    font-size: large;
    text-decoration: none;
    font-weight: 500;
    
`
    