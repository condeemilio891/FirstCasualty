import React from 'react'
import {MiddleGridContainer,MiddleGridItemContainer,CardArticle,CardImg,CardData,
CardDescription,CardTitle} from './NewsGridStyle'
import SamplePic from "../../assets/Photos/userPic.png"


const NewsGrid = () => {
  return (
    <MiddleGridContainer>

    <MiddleGridItemContainer>
      <CardArticle>
          <CardImg src={SamplePic}></CardImg>
          <CardData>
              <CardDescription>
                Lorem lorm
              </CardDescription>
              <CardTitle>
                Title
              </CardTitle>
          </CardData>
      </CardArticle>
    </MiddleGridItemContainer>

    <MiddleGridItemContainer>
      <CardArticle>
          <CardImg src={SamplePic}></CardImg>
          <CardData>
              <CardDescription>
                Lorem lorm
              </CardDescription>
              <CardTitle>
                Title
              </CardTitle>
          </CardData>
      </CardArticle>
    </MiddleGridItemContainer>
    <MiddleGridItemContainer>
      <CardArticle>
          <CardImg src={SamplePic}></CardImg>
          <CardData>
              <CardDescription>
                Lorem lorm
              </CardDescription>
              <CardTitle>
                Title
              </CardTitle>
          </CardData>
      </CardArticle>
    </MiddleGridItemContainer>

 </MiddleGridContainer>
  )
}

export default NewsGrid