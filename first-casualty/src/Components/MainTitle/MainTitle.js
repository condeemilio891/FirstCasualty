import React from 'react'
import { MTS,MTSContainer,TitleContainerLeft,TitleContainerRight,TitleAndSubtitleContainer,TitlePic, TitleContainerCenter } from './MainTitleS'
import Flag0 from "../../assets/Photos/flag0.png"
import Flag1 from "../../assets/Photos/flag1.png"
const MainTitle = () => {
  return (
  <MTSContainer >

    <TitleContainerLeft>
        <MTS>JPost</MTS>
        <TitlePic src={Flag0}/>
    </TitleContainerLeft>

    <TitleContainerCenter>
      <MTS> Neutral</MTS>
    </TitleContainerCenter>

    <TitleContainerRight>
        <MTS textColor="#FFFFFF">Al Jazeera</MTS>
        <TitlePic src={Flag1}/>
    </TitleContainerRight>

 

 </MTSContainer>
 
  )
}

export default MainTitle