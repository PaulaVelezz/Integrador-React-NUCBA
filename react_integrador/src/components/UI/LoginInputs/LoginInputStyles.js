import styled from "styled-components";

export const InputContainerS = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  background-color: black;
  text-align: center;
`;

export const LoginInputS = styled.input`
  width: 260px;
  padding: 18px;
  color: black;
  background-color: gainsboro;
  border: none;
  font-size: 15px;
`;

export const ErrorMsgS = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  color: orangered;
`;
