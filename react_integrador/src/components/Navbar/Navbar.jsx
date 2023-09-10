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
          <Link style={{ color: "whitesmoke" }} to="/">
            Home
          </Link>
          <HiOutlineHome />
        </NavLinkS>

        <NavLinkS>
          <Link style={{ color: "whitesmoke" }} to="/about">
            About us
          </Link>
        </NavLinkS>

        <NavLinkS onClick={() => navigate("/login")}>
          Cuenta
          <HiOutlineUserCircle />
        </NavLinkS>

        <NavLinkCart>
          <CartBasketIcon />
        </NavLinkCart>
      </LinksContainerS>
    </NavbarContainerS>
  );
};

export default Navbar;
