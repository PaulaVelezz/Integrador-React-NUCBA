import React from "react";

import {
  LinksContainerS,
  Logo,
  NavLinkS,
  NavbarContainerS,
  NavLinkCart,
} from "./NavbarStyles";

import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartBasketIcon from "./CartBasketIcon/CartBasketIcon";

import CartModal from "./CartModal/CartModal";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainerS>
      <CartModal />

      <Link to="/">
        <Logo>
          <img src="images/Logo (3).png" alt="logo" />
        </Logo>
      </Link>

      <LinksContainerS>
        <NavLinkS>
          Home
          <HiOutlineHome />
        </NavLinkS>

        <NavLinkS>About us</NavLinkS>

        <NavLinkS onClick={() => navigate("/login")}>
          Cuenta
          <HiOutlineUserCircle />
        </NavLinkS>

        <NavLinkCart>
          <CartBasketIcon />
        </NavLinkCart>

        {/* <RxHamburgerMenu/> */}
      </LinksContainerS>
    </NavbarContainerS>
  );
};

export default Navbar;
