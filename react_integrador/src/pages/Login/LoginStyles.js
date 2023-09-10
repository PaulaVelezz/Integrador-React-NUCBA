import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginContainerS = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  color: black;
  border-radius: 15px;
  margin-top: 5rem;
`;

export const LgBoxOne = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: whitesmoke;
  box-shadow: #094c66 9px 2px 4px;
  height: 80vh;
  padding: 2rem;
`;

export const LgBoxTwo = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    border: solid 1px #ff6600;
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem;
    color: #ff6600;
  }

  @media (max-width: 910px) {
    img {
      display: none;
    }
  }
`;

export const LoginTopS = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding: 2rem;
  gap: 2rem;

  img {
    width: 100px;
    object-fit: contain;
    background: black;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 1rem;
`;

export const RedirectionLtoR = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 10px;

  & span {
    font-weight: 600;
    color: #094c66;
  }

  :hover {
    border-bottom: solid 1px black;
  }
`;
