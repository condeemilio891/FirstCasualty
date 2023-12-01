import Carousel from 'react-bootstrap/Carousel';
import SamplePic from "../../assets/Photos/userPic.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { MiddleGridContainer, StyledCarouselContainer,
   MiddleGridItemContainer,CardArticle,CardImg,CardData,
   CardDescription,CardTitle, CardDataContainer} from "../Carousel/CarouselStyle";



const BootCarousel = () => {


  return (
    
   <>
   {/* Left Carousel */}
    <StyledCarouselContainer float="left">
         
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SamplePic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item for each slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SamplePic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </StyledCarouselContainer>





{/* Middle Grid */}
   <MiddleGridContainer>

      <MiddleGridItemContainer>
        <CardArticle>
            <CardImg src={SamplePic}></CardImg>
            {/* <CardDataContainer> */}
            <CardData>
                <CardDescription>
                  Lorem lorm
                </CardDescription>
                <CardTitle>
                  Title
                </CardTitle>
            </CardData>
            {/* </CardDataContainer> */}
        </CardArticle>
      </MiddleGridItemContainer>

   </MiddleGridContainer>





{/* RIght Carousel */}
    <StyledCarouselContainer float="right">
         
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SamplePic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item for each slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SamplePic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </StyledCarouselContainer>
    </>
    
  );
};

export default BootCarousel;