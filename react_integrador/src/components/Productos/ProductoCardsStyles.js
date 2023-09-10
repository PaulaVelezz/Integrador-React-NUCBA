import styled from "styled-components";

export const ProdCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 6rem;
  margin: auto;

  @media (max-width: 425px) {
    padding: 4rem;
  }

  @media (max-width: 375px) {
    padding: 2rem;
  }
`;

export const ProdCardS = styled.div`
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 7px;
  width: 280px;
  height: 370px;
  gap: 10px;
  padding: 20px;
  color: black;

  h3 {
    font-family: "Blenny Trial", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  img {
    width: 270px;
  }

  @media (max-width: 425px) {
    width: 250px;
  }

  @media (max-width: 375px) {
    width: 230px;
  }
`;

export const BtnPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PriceCard = styled.span`
  font-weight: 600;
  font-size: 18px;
`;
