import styled from "styled-components";

export const DetailsContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
`;

export const BtnGoBack = styled.button`
  cursor: pointer;
  color: whitesmoke;
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  background-color: #094c66;
  padding: 7px;
  height: 15%;
  border: none;

  &:hover {
    background-color: #e06716;
  }
`;

export const DetailsImg = styled.div`
  background-color: whitesmoke;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 70%;
  }
`;

export const DetailsText = styled.div`
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 40%;
  border: 1px solid #094c66;
`;

export const DetailsBtns = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
`;

export const DetailsBtn = styled.button`
  cursor: pointer;
  background-color: var(--bg-naranjita);
  box-shadow: #094c66 4px 4px 0px;
  border-radius: 7px;
  padding: 10px 15px;
  border: solid 1px black;
  font-weight: bold;
  letter-spacing: 1px;
  transition: transform 200ms, box-shadow 200ms;

  &:active {
    transform: translateY(4px) translateX(4px);
    box-shadow: #094c66 0px 0px 0px;
  }
`;

export const Divider = styled.div`
  border: dashed 1px;
  width: 70%;
`;

export const DetailsIcons = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;

  & img {
    width: 45px;
  }
`;
