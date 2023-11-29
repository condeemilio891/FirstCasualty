

import styled from "styled-components";


export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Create 4 columns with equal width */
    grid-gap: 10px;
`

export const GridItem= styled.div`

    background-color: #ddd;
    padding: 20%;
    text-align: center;
`