import Link from "next/link";
import React from "react";
import {
  CountryContainer,
  CountryFlag,
  CountryInfo,
  CountryInfoContainer,
  CountryName,
  FlagContainer,
  InfoItem,
} from "../../styles/country_styles";
import { formatPopulation } from "../../utils/formatPopulation";

export default function Country({ country }) {
  return (
    <Link href={`/${country.name}`} passHref>
      <CountryContainer>
        <FlagContainer>
          <CountryFlag
            layout="fill"
            objectFit="cover"
            src={country.flag}
            alt={country.name}
          />
        </FlagContainer>

        <CountryInfoContainer>
          <CountryName>{country.name}</CountryName>

          <CountryInfo>
            <InfoItem>
              <strong>Population: </strong>
              <span>{formatPopulation(country.population)}</span>
            </InfoItem>
            {country.region && (
              <InfoItem>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </InfoItem>
            )}
            {country.capital && (
              <InfoItem>
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </InfoItem>
            )}
          </CountryInfo>
        </CountryInfoContainer>
      </CountryContainer>
    </Link>
  );
}
