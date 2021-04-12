import Link from "next/link";
import Router from "next/router";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { formatPopulation } from "../utils/formatPopulation";

const Container = styled.div`
  margin: 2rem auto;
  width: 85%;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.elements};
  border: 0;
  padding: 0.4rem 1.5rem;
  color: ${(props) => props.theme.text};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const CountryContainer = styled.div`
  margin-top: 4rem;
  @media only screen and (min-width: 975px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }
`;

const CountryName = styled.h2`
  font-weight: 700;
  margin-top: 2rem;
`;

const CountryInfoContainer = styled.div`
  @media only screen and (min-width: 975px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    margin-top: 3rem;
    justify-content: space-between;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

const CountryInfoLower = styled(CountryInfo)`
  margin-top: 4rem;
  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

const BorderCountriesContainer = styled.div`
  margin-top: 3rem;
`;

const BorderCountries = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  max-width: 100%;
`;

const BorderCountry = styled.span`
  background-color: ${(props) => props.theme.elements};
  padding: 0.5rem 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export default function CountryPage({ country, borders }) {
  if (!country) {
    return <p>Country not found</p>;
  }

  const goHome = () => {
    Router.push("/");
  };

  return (
    <Container>
      <BackButton onClick={goHome}>
        <span className="material-icons">keyboard_backspace</span>
        <span>Back</span>
      </BackButton>

      <CountryContainer>
        <Image
          height={400}
          width={600}
          objectFit="contain"
          src={country.flag}
          alt={country.name}
        />

        <div>
          <CountryName>{country.name}</CountryName>

          <CountryInfoContainer>
            <CountryInfo>
              <div>
                <strong>Native name: </strong>
                <span>{country.nativeName}</span>
              </div>
              <div>
                <strong>Population: </strong>
                <span>{formatPopulation(country.population)}</span>
              </div>
              <div>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </div>
              {country.subregion && (
                <div>
                  <strong>Sub Region: </strong>
                  <span>{country.subregion}</span>
                </div>
              )}
              {country.capital && (
                <div>
                  <strong>Capital: </strong>
                  <span>{country.capital}</span>
                </div>
              )}
            </CountryInfo>

            <CountryInfoLower>
              <div>
                <strong>Top level Domain: </strong>
                <span>{country.topLevelDomain[0]}</span>
              </div>
              <div>
                <strong>Currencies: </strong>
                <span>
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </div>
              <div>
                <strong>Languages: </strong>
                <span>
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </div>
            </CountryInfoLower>
          </CountryInfoContainer>

          {borders?.length > 0 && (
            <BorderCountriesContainer>
              <h2>Border Countries: </h2>
              <BorderCountries>
                {borders?.map((border, index) => (
                  <Link href={`/${border}`} key={index} passHref>
                    <BorderCountry>{border}</BorderCountry>
                  </Link>
                ))}
              </BorderCountries>
            </BorderCountriesContainer>
          )}
        </div>
      </CountryContainer>
    </Container>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { country: country.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const country = params.country;
  console.log(country);
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  const json = await res.json();

  const apiCalls = json[0].borders.map((code) =>
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
  );

  const borders = await Promise.all(apiCalls)
    .then((values) => Promise.all(values.map((value) => value.json())))
    .then((countries) => countries.map((country) => country.name));

  return { props: { country: json[0], borders } };
};
