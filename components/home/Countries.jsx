import React from "react";
import { CountriesContainer, InfoText } from "../../styles/countries_styles";
import Country from "./Country";

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
