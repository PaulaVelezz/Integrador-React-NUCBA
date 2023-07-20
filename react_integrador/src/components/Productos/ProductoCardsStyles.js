import styled from "styled-components";


export const ProdCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: transparent;
    color: #141414;
    padding: 6rem 4rem;
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

    h3{
        font-family: 'Blenny Trial', sans-serif;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }

    img{
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


export const BtnSM = styled.div`
    button{
        background-color: #141414;
        border: 1px solid #141414;
        cursor: pointer;
        color: whitesmoke;
        border-radius: 9px;
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        padding: 4px 10px;
        transition: 400ms;
        transform: translateY(0);
    }

    button:hover{
        transition: 400ms;
        transform: translateY(-0px);
        background-color: whitesmoke;
        color: #141414;
        padding: 4px 13px;
        border: 1px solid #141414;
        border-radius: 9px;
    }
`;