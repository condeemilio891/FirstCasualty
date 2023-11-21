import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    DateStyle,
} from "./NavBarStyle";
 

const currentDate = new Date();

  // Format date as MM/dd/yyyy
  const formattedDate = `${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getDate().toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

  // Format time as hh:mm:ss
  //const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;
const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
 
                <NavMenu>
                    <DateStyle> {formattedDate}</DateStyle>
                    
                    <NavLink to="/" >
                    Israel-Palestine
                    </NavLink>
                    <NavLink to="/russiaUkraine" activeStyle>
                    Russia-Ukraine
                    </NavLink>
                    <NavLink to="https://israelpalestine.liveuamap.com/" activeStyle>
                    Live-U-Map
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};
 
export default Navbar;