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

export const ModalMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
`;

export const ItemMenu = styled(motion(Link))``;
