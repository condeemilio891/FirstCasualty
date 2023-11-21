import styled from "styled-components"


export const StyledCarouselContainer = styled.div`

max-width: 25% !important;
max-height: 15% !important ;
margin: auto; 
float: ${(props) => props.float || 'none'};
padding-bottom: 3%;
`;
export const MiddleGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
    grid-gap: 10px;
    width:33%;
    

    
`
export const MiddleGridItem= styled.div`

    background-color: #ddd;
    padding: 8%;
    text-align: center;
   
`