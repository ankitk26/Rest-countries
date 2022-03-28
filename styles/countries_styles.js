import styled from "styled-components";

export const CountriesContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  width: 75%;
  gap: 2rem;
  justify-content: center;

  @media only screen and (min-width: 975px) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    max-width: 100%;
  }
`;

export const InfoText = styled.p`
  text-align: center;
`;
