import React from 'react'
import { LinksContainerS, Logo, NavLinkS, NavbarContainerS } from './NavbarStyles';
import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { BsBasket } from "react-icons/bs";
// import { useDispatch } from 'react-redux';



const Navbar = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

  return (
    <NavbarContainerS>
        <Logo>
            <img src="images/Logo (3).png" alt="logo" />
        </Logo>
        <LinksContainerS>
        <NavLinkS>
            Home
            <HiOutlineHome/>
        </NavLinkS>

        <NavLinkS>
            Cuenta
            <HiOutlineUserCircle/>
        </NavLinkS>

        <NavLinkS>
            <BsBasket/> 
        </NavLinkS>
        </LinksContainerS>
    </NavbarContainerS>
  );
};

export default Navbar;