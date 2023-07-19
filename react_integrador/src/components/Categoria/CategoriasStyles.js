import styled from "styled-components";

export const CategFilTitle = styled.div`
    background-color: whitesmoke;
    color: #141414;
    display: flex;
    justify-content: center;
    padding: 30px;
    text-align: center;
`;

export const CategoriasFilContainer = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: whitesmoke;
    color: #141414;
    padding: 1rem;
`;

export const CategFilCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: solid 1px black;
    border-radius: 7px;
    width: 140px;
    height: 180px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    font-family: 'Blenny Trial', sans-serif;
    font-size: 17px;
    letter-spacing: 1px;
    
    background-color: ${({ selected }) => selected ? 'var(--bg-naranjita)' : 'whitesmoke'};;

    h3:hover{
        color: ${({ selected }) => selected ? '#141414' : ' #FF6600'};;
    }

    &img{
        width: auto;
    }
`;