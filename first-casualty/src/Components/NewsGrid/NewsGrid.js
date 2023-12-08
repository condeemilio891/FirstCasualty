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


const NewsCard = ({ backgroundImage, title, author,source }) => {
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
          <NewsCardTag>{source}</NewsCardTag>
        </NewsCardAbout>
        <NewsCardTitle className={isHovered ? 'expanded' : ''}>{title}</NewsCardTitle>
        <NewsCardAuthor className={isHovered ? 'expanded' : ''}>{author}</NewsCardAuthor>
      </NewsCardInfo>
    </NewsGridCard>
  );
};

const NewsGrid = () => {
  const [articleData1, setArticleData1] = useState([]);
  const [articleData2, setArticleData2] = useState([]);
  const [articleData3, setArticleData3] = useState([]);
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const apiKey = process.env.REACT_APP_APIKEY;

   const fetchNewsData = async () => {
    try {
      const response1 = await fetch(`${apiUrl}?sources=al-jazeera-english&apiKey=${apiKey}`);
      const data1 = await response1.json();

      const response2 = await fetch(`${apiUrl}?sources=the-jerusalem-post&apiKey=${apiKey}`);
      const data2 = await response2.json();

      const response3 = await fetch(`${apiUrl}?sources=the-times-of-india&apiKey=${apiKey}`);
      const data3 = await response3.json();

      // Update state with data from each API call
      setArticleData1(data1.articles);
      setArticleData2(data2.articles);
      setArticleData3(data3.articles);
    } catch (error) {
      console.error('Error fetching news data:', error.message);
    }
  };
  return (
    <>
      <button onClick={fetchNewsData}>Fetch News Data</button>
      <NewsGridContainer>
        {/* NewsCard for API 1 */}
        {articleData1.map((article, index) => (
          <NewsCard
            key={index}
            backgroundImage={article.urlToImage || SamplePic}
            source="Al-Jazeera"
            title={article.title || 'Title Not Available'}
            author={article.author || 'Author Not Available'}
            content={article.content || 'Content Not Available'}
          />
        ))}
        {/* NewsCard for API 2 */}
        {articleData2.map((article, index) => (
          <NewsCard
            key={index}
            source="The Jerusalem Post"
            backgroundImage={article.urlToImage || SamplePic}
            title={article.title || 'Title Not Available'}
            author={article.author || 'Author Not Available'}
            content={article.content || 'Content Not Available'}
          />
        ))}
        {/* NewsCard for API 3 */}
        {articleData3.map((article, index) => (
          <NewsCard
            key={index}
            source="Times Of India"
            backgroundImage={article.urlToImage || SamplePic}
            title={article.title || 'Title Not Available'}
            author={article.author || 'Author Not Available'}
            content={article.content || 'Content Not Available'}
          />
        ))}
      </NewsGridContainer>
    </>
  );
};

export default NewsGrid;