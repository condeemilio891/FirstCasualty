import React from 'react'
import { MTS,MTSContainer,TitleContainerLeft,TitleContainerRight,TitleAndSubtitleContainer,TitlePic, TitleContainerCenter } from './MainTitleS'
import Flag0 from "../../assets/Photos/flag0.png"
import Flag1 from "../../assets/Photos/flag1.png"
const MainTitle = () => {
  return (
  <MTSContainer >

    <TitleContainerLeft>
    <TitlePic src={Flag0}/>
        <MTS>Jerusalem Post</MTS>
       
    </TitleContainerLeft>

   

    <TitleContainerRight>
    <TitlePic src={Flag1}/>
        <MTS textColor="#FFFFFF">Al-Jazeera</MTS>
        
    </TitleContainerRight>

 

 </MTSContainer>
 
  )
}

export default MainTitle