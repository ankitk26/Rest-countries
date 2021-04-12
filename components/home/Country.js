import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { formatPopulation } from "../../utils/formatPopulation";

const CountryContainer = styled.div`
  background-color: ${(props) => props.theme.elements};
  border-radius: 0.5rem;
  max-width: 100%;
  padding-bottom: 2rem;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const CountryFlag = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CountryInfoContainer = styled.div`
  padding: 1rem;
`;

const CountryName = styled.h3`
  font-size: 1.3em;
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 0.75rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const FlagContainer = styled.div`
  width: "100%";
  height: 200px;
  position: relative;
`;

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
