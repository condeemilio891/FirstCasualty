import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background-image: linear-gradient(to right,#3A3475, #221C35,#221C35,  #221C35,#3A3475);
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 0.2rem calc((100vw - 1100px) / 2);
    z-index: 12;
   
`;
 
export const NavLink = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    color:white;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;
 
export const Bars = styled(FaBars)`
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
   justify-content: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

export const DateStyle=styled.p`
    
    font-size: 1rem;
    font-weight: bolder;
    position:absolute;
    top:0;
    left:0;
    z-index: 1;
    padding-top: .5%;
    padding-left: 2%;
    color:white;
`

export const NavBarSubtitle= styled.p`

    font-size: .9rem; 
    color:white;
    font-style: italic;
    font-weight: bold;
    z-index: 1;
    position: absolute;
    bottom:20; 
    left:50;
    width: 100%;
    text-align: center;
    white-space: pre;
`
