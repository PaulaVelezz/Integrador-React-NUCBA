import styled from "styled-components";

export const AboutUsContainerS = styled.section`
  padding: 3em;
  margin-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    font-size: smaller;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AboutImg = styled.div`
  height: 400px;

  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const AboutText = styled.div`
  border-radius: 20px;
  background-color: #f5f5f5;
  color: #181d0f;
  padding: 1.3em;
  letter-spacing: 1px;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 400px;

  h2 {
    font-size: 1.9em;
  }
`;
