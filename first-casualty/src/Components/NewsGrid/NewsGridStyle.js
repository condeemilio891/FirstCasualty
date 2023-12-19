import styled from "styled-components";

export const NewsGridContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  /* background-image: linear-gradient(to right,#3A3475, #221C35,#221C35,  #221C35,#3A3475); */
 
`;

export const NewsGridCard = styled.div`
  align-self: flex-start;
  position: relative;
  margin-top: 5px;
  width: 325px;
  min-width: 275px;
  margin: 1.25rem 0.75rem;
  background: white;
  transition: all 300ms ease-in-out;
  border-radius: 25px;
   &:hover {
    cursor: pointer;
    box-shadow: 0px 15px 35px rgba(227, 252, 239, 0.1),
      0px 5px 15px rgba(0, 0, 0, 0.07);
    transform: scale(1.025);
  }
`;

export const NewsCardImg = styled.div`
  /* visibility: hidden; */
 
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 25px;
`;

export const NewsAnchor = styled.a`
  text-decoration: none;
  color: #172b4d;
  
`;

export const NewsCardImgHovered = styled.div`
  --card-img-hovered-overlay: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  transition: all 350ms ease-in-out;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  position: absolute;
  height: 200px;
  top: 0;
  border-radius: 25px;

  &:hover {
    --card-img-hovered-overlay: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.65)
    );
    height: 100%;
  }
  &.expanded {
    height: 100%;
  }
`;

export const NewsCardInfo = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: transparent;
    color:white;
  }
`;

export const NewsCardAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  transition: all 200ms ease-in-out;

  &:hover {
    color:white;
  }
`;

export const NewsCardTag = styled.a`
  width: 100px;
  max-width: 150px;
  padding: 0.2rem 0.5rem;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #505f79;
  color: #fff;

  &.tag-news {
    background: #36b37e;
  }

  &.tag-deals {
    background: #ffab00;
  }

  &.tag-politics {
    width: 71px;
    background: #ff5630;
  }
`;

export const NewsCardTitle = styled.h1`
  z-index: 10;
  font-size: 1.5rem;
  padding-bottom: 0.75rem;
  transition: all 350ms ease-in-out;

  &:hover {
    //color: #ebecf0;
  
  }
  &.expanded{
    color:white;
  }
`;

export const NewsCardAuthor = styled.div`
  padding-bottom: 0.75rem;
  transition: all 250ms ease-in-out;

  &:hover {
   // opacity: 0;
  }
  &.expanded{
    color:white
  }
`;
