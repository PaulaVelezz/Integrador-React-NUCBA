import { styled } from "styled-components";

export const HeroContainerS = styled.section`
  /* border: 1px solid red;  */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: auto;
`;

export const HeroMainContainer = styled.div`
  /* border: solid 1px lightblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;

  h1 {
    font-family: "Blenny Trial", sans-serif;
    font-size: 4em;
    letter-spacing: 1px;
  }

  @media (max-width: 375px) {
    text-align: center;
    font-size: smaller;
  }
`;

export const HeroOne = styled.div`
  /* border: solid 1px blueviolet; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const HeroTwo = styled.div`
  /* border: solid 1px blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const HeroTwoImg = styled.div`
  border: none /* solid 1px #010101 #00BF63*/;
  border-radius: 40px 3px 40px 40px;
  width: 28vw;
  height: 15vh;
  margin: 10px;
  background-image: url("images/hero.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 20px 8px 90px 10px #28283d;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const HeroOneImg = styled.div`
  border: solid 1px #00bf63; /* #FF6600*/
  border-radius: 3px 30px 40px 30px;
  width: 16vw;
  height: 12vh;
  margin: 10px;
  background-image: url("images/beans.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 10px 100px 23px #28283d;

  @media (max-width: 681px) {
    display: none;
  }
`;

/////////////////////////////////

export const HeroButtonsContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 5px;
`;

export const HeroBtnOne = styled.button`
  padding: 1vw;
  border: solid 1px whitesmoke;
  border-radius: 5px;
  background: whitesmoke;
  color: #010101;
  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  font-weight: bolder;
  cursor: not-allowed;
`;

export const HeroBtnTwo = styled.button`
  padding: 1vw;
  border: solid 1px whitesmoke;
  border-radius: 5px;
  background: #010101;
  color: whitesmoke;
  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
`;
