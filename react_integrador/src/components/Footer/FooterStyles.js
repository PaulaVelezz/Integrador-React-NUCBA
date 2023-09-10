import styled from "styled-components";

export const FooterContainer = styled.div`
  border-top: solid 1px whitesmoke;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 2rem;
`;

export const FooterLogo = styled.div`
  img {
    width: 140px;
  }
`;

export const FooterBoxOne = styled.div``;

export const FirstBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  margin-top: 10px;
`;

export const FooterBoxTwo = styled.div``;

export const SecondBoxInfo = styled(FirstBoxInfo)``;

export const FooterBoxthree = styled.div``;

export const ThirdBoxInfo = styled.div`
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
