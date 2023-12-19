import React from 'react'
import { MTS,MTSContainer,TitleContainerLeft,TitleContainerRight,TitleAndSubtitleContainer,TitlePic, TitleContainerCenter } from './MainTitleS'
import Flag0 from "../../assets/Photos/flag0.png"
import Flag1 from "../../assets/Photos/flag1.png"
const MainTitle = () => {
  return (
  <MTSContainer >
       
    <TitleContainerLeft>
    <TitlePic src={Flag0} borderColor="black"/>
        
       
    </TitleContainerLeft>

   
    <TitleContainerCenter>
    <MTS textColor="#FFFFFF">Comparing News Sources</MTS>

    </TitleContainerCenter>
    <TitleContainerRight>
    <TitlePic src={Flag1} />
      
        
    </TitleContainerRight>

 

 </MTSContainer>
 
  )
}

export default MainTitle