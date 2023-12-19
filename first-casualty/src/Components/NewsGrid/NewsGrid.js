import React, { useState,useEffect } from 'react';
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
  const [interlacedArray, setInterlacedArray] = useState([]);
  const apiUrl = 'https://newsapi.org/v2/top-headlines';
  const apiKey = process.env.REACT_APP_APIKEY;
 
  const fetchNewsData = async () => {
    try {
      const response1 = await fetch(`${apiUrl}?sources=al-jazeera-english&apiKey=${apiKey}&queue=war`);
      const data1 = await response1.json();
  
      const response2 = await fetch(`${apiUrl}?sources=the-jerusalem-post&apiKey=${apiKey}&queue=war`);
      const data2 = await response2.json();
  
      const response3 = await fetch(`${apiUrl}?sources=the-times-of-india&apiKey=${apiKey}&queue=war`);
      const data3 = await response3.json();
  
      // Update state with data from each API call
      setArticleData1(data1.articles);
      setArticleData2(data2.articles);
      setArticleData3(data3.articles);
  
      // Interlace the arrays
      const interlaced = interlaceArrays(data1.articles, data2.articles, data3.articles);
      setInterlacedArray(interlaced); // Assuming you have a state variable for interlacedArray
      console.log(interlaced);
    } catch (error) {
      console.error('Error fetching news data:', error.message);
    }
  };

 
  // Helper function to interlace arrays
  const interlaceArrays = (...arrays) => {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const result = [];
  
    for (let i = 0; i < maxLength; i++) {
      arrays.forEach((arr) => {
        if (arr[i]) {
          result.push(arr[i]);
        }
      });
    }
  
    return result;
  };
  useEffect(() => {
    console.log('Interlaced Array:', interlacedArray);
  }, [interlacedArray]);
  

  return (
    <>
      <button onClick={fetchNewsData}>Fetch News Data</button>
      <NewsGridContainer>
        {interlacedArray.map((article, index) => (
          <NewsCard
            key={index}
            backgroundImage={article.urlToImage || SamplePic}
            source={article.source.name||"NA"}
            title={article.title || 'Title Not Available'}
            author={article.author || 'Author Not Available'}
            content={article.content || 'Content Not Available'}
          />
        ))}
      </NewsGridContainer>
    </>
  );
};
export default NewsGrid