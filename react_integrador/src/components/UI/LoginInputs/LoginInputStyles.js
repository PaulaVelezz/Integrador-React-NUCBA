import styled from "styled-components";

export const InputContainerS = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    background-color: black;
    color: orange;
`;

export const LoginInputS = styled.input`
    width: 270px;
    padding: 30px;
    color: black;
    background-color: orangered;
    border: solid 1px red;
    outline: none;
`;

export const ErrorMsgS = styled.p`
    margin: 0;
    font-size: 13px;
    color: red;
`;