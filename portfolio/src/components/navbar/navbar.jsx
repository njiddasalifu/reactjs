import React from "react";
import {
    Nav, NavLink, Bars, NavMenu, Navbtn, NavbtnLink,
} from './NavbarElements';

const Navbar = ()=>{
    return(
        <>
        
        <NavMenu>
            <NavLink to='/dashboard' activeStyle>Dashboard</NavLink>
            <NavLink to='/about' activeStyle>About</NavLink>
            <NavLink to='/projects' activeStyle>Projects</NavLink>


        </NavMenu>
        </>
    )
}
//exporting the Navbar to enable usage anywhere.
export default Navbar;