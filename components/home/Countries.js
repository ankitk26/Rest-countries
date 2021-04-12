import React from "react";
import styled from "styled-components";
import Country from "./Country";

const CountriesContainer = styled.div`
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

const InfoText = styled.p`
  text-align: center;
`;

export default function Countries({ countries }) {
  return (
    <CountriesContainer>
      {countries?.length === 0 && <InfoText>No countries found</InfoText>}
      {countries?.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </CountriesContainer>
  );
}
