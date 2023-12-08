import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    DateStyle,
    NavBarSubtitle,
} from "./NavBarStyle";
 

const currentDate = new Date();

  // Format date as MM/dd/yyyy
  const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

  // Format time as hh:mm:ss
  //const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
const Navbar = () => {
    const apiKey = process.env.REACT_APP_APIKEY; // Get your API key from https://newsapi.org/
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    

    return (
        <>
            <Nav>
                <Bars/>
 
                <NavMenu>
                    <DateStyle> {formattedDate}</DateStyle>
                    
                    <NavLink to="/russiaUkraine" activeStyle>
                    AlJazeera
                    </NavLink>
                    <NavLink to="https://israelpalestine.liveuamap.com/" activeStyle>
                    Live-U-Map
                    </NavLink>
                    <NavLink to="https://israelpalestine.liveuamap.com/" activeStyle>
                    WION
                    </NavLink>
                    <NavLink to="/russiaUkraine" activeStyle>
                    Jerusalem Post
                    </NavLink>
                    
                </NavMenu>
                <NavBtn >
                    {/* <NavBtnLink onClick={() => fetchAlJazeeraNews()}>
                        Call API
                    </NavBtnLink> */}

                    
                </NavBtn>
              <NavBarSubtitle>
              </NavBarSubtitle>
            </Nav>
        </>
    );
};
 
export default Navbar;