import React, { useState } from "react";

import {
  LinksContainerS,
  Logo,
  NavLinkS,
  NavbarContainerS,
  NavLinkCart,
  Menu,
  MenuItem,
  MenuItemLink,
  IconMobile,
} from "./NavbarStyles";

import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartBasketIcon from "./CartBasketIcon/CartBasketIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCloseSquare } from "react-icons/ai";
import CartModal from "./CartModal/CartModal";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow(!show);
  };

  return (
    <NavbarContainerS>
      <CartModal />

      <Link to="/">
        <Logo>
          <img src="images/Logo (3).png" alt="logo" />
        </Logo>
      </Link>

      <IconMobile onClick={() => changeShow()}>
        {show ? <AiFillCloseSquare /> : <RxHamburgerMenu />}
      </IconMobile>

      <Menu show={show}>
        <MenuItem onClick={() => changeShow()}>
          <MenuItemLink to="/">
            Home
            <HiOutlineHome />
          </MenuItemLink>
        </MenuItem>

        <MenuItem onClick={() => changeShow()}>
          <MenuItemLink to="/about">About us</MenuItemLink>
        </MenuItem>

        <MenuItem onClick={() => changeShow()}>
          <MenuItemLink style={{ color: "whitesmoke" }} to="/login">
            Cuenta
            <HiOutlineUserCircle />
          </MenuItemLink>
        </MenuItem>
      </Menu>

      <NavLinkCart>
        <CartBasketIcon />
      </NavLinkCart>
    </NavbarContainerS>
  );
};

export default Navbar;
