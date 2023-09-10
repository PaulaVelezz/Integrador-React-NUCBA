import styled from "styled-components";

export const ProdCardContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: transparent;
  color: #141414;
  padding: 8rem;
  margin: auto; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3em;
  padding: 3em;
  margin: 3em;
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
