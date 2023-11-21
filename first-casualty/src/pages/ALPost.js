import React from 'react'
import BootCarousel from '../Components/Carousel/Carousel'
import { AlPageCarouselContainer,AlPageContainer } from './PageStyle'

import MainTitle from '../Components/MainTitle/MainTitle'
import NewsGrid from '../Components/NewsGrid/NewsGrid'


const ALPost = () => {
  return (
    <>
    <MainTitle/>
    <AlPageContainer>
    <AlPageCarouselContainer>
    <BootCarousel/>
    </AlPageCarouselContainer>
    <NewsGrid/>
    </AlPageContainer>
    </>
  )
}

export default ALPost