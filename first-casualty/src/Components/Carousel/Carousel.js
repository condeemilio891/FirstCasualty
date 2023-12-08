import Carousel from 'react-bootstrap/Carousel';
import SamplePic from "../../assets/Photos/samplePic2.png";
import SamplePic1 from "../../assets/Photos/samplePic3.png";
import SamplePic2 from "../../assets/Photos/samplePic4.png";
import SamplePic3 from "../../assets/Photos/samplePic1.png";
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
         
    <Carousel >
      <Carousel.Item >
        <img style={{ borderRadius: '25px' }}
          className="d-block w-100"
          src={SamplePic}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>First slide label</h6>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item  >
      {/* Add more Carousel.Item for each slide */}
      <Carousel.Item >
        <img style={{ borderRadius: '25px' }}
          className="d-block w-100"
          src={SamplePic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>First slide label</h6>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </StyledCarouselContainer>



{/* RIght Carousel */}
    <StyledCarouselContainer float="right">
         
    <Carousel>
      <Carousel.Item>
        <img style={{ borderRadius: '25px' }}
          className="d-block w-100"
          src={SamplePic2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>First slide label</h6>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item for each slide */}
      <Carousel.Item >
        <img style={{ borderRadius: '25px' }}
          className="d-block w-100"
          src={SamplePic3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h6>First slide label</h6>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </StyledCarouselContainer>
    </>
    
  );
};

export default BootCarousel;