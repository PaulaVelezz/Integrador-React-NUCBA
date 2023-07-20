import styled from "styled-components";
import {Form as FormikForm } from 'formik';

export const LoginContainerS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    gap: 1rem;
    margin-top: 30px;
    padding: 2rem;
    background-color: whitesmoke;
    color: black;
    border-radius: 15px;
`;

export const LoginTopS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    color: black;

    img{
        width: 150px;
        height: 130px;
        object-fit: contain;
        background: black;
        border-radius: 15px;
    }
`;


export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 10px;
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

    :hover{
        border-bottom: solid 1px black;
    }
`;