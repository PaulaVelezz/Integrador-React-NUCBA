import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NavbarContainerS = styled.header`
  height: 80px;
  background: transparent;
  border-bottom: solid 1px whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 150px;
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

export const LinksContainerS = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: 1.1rem;
`;

export const NavLinkS = styled.div`
  color: whitesmoke;
  cursor: pointer;

  &.active {
    color: #ff6600;
  }
`;

export const NavLinkCart = styled(NavLinkS)``;

export const NavMenu = styled.div`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ show }) => (show ? "0" : "-100%")};
    flex-direction: column;
    transition: 0ms.5s all ease-in;
    background-color: #094c66;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0%.5rem 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled(Link)`
  color: whitesmoke;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

export const IconMobile = styled.div`
  display: none;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
    color: whitesmoke;
  }
`;
