import Carousel from 'react-bootstrap/Carousel';
import SamplePic from "../../assets/Photos/userPic.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { MiddleGridContainer, MiddleGridItem, StyledCarouselContainer, TestText } from "../Carousel/CarouselStyle";



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

    <MiddleGridItem>1</MiddleGridItem>
    <MiddleGridItem>2</MiddleGridItem>
    <MiddleGridItem>3</MiddleGridItem>
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