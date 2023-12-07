import React, { useState } from 'react';
import {
  NewsGridContainer,
  NewsGridCard,
  NewsCardImg,
  NewsAnchor,
  NewsCardImgHovered,
  NewsCardInfo,
  NewsCardAbout,
  NewsCardTag,
  NewsCardTitle,
  NewsCardAuthor
} from './NewsGridStyle';
import SamplePic from '../../assets/Photos/samplePic0.png';
import SamplePic2 from '../../assets/Photos/samplePic1.png';

const NewsCard = ({ backgroundImage, title, author }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <NewsGridCard>
      <NewsCardImg
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className={isHovered ? 'expanded' : ''}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      <NewsAnchor>
        <NewsCardImgHovered
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className={isHovered ? 'expanded' : ''}
        ></NewsCardImgHovered>
      </NewsAnchor>
      <NewsCardInfo onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <NewsCardAbout>
          <NewsCardTag>News</NewsCardTag>
        </NewsCardAbout>
        <NewsCardTitle className={isHovered ? 'expanded' : ''}>{title}</NewsCardTitle>
        <NewsCardAuthor className={isHovered ? 'expanded' : ''}>{author}</NewsCardAuthor>
      </NewsCardInfo>
    </NewsGridCard>
  );
};

const NewsGrid = () => {
  return (
    <NewsGridContainer>
      <NewsCard backgroundImage={SamplePic} title="Title 1" author="Author 1" />
      <NewsCard backgroundImage={SamplePic2} title="Title 2" author="Author 2" />
      <NewsCard backgroundImage={SamplePic2} title="Title 3" author="Author 3" />
    </NewsGridContainer>
  );
};

export default NewsGrid;