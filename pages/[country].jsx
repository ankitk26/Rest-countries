import Link from "next/link";
import Router from "next/router";
import React from "react";
import Image from "next/image";
import { formatPopulation } from "../utils/formatPopulation";
import {
  BackButton,
  BorderCountries,
  BorderCountriesContainer,
  BorderCountry,
  Container,
  CountryContainer,
  CountryInfo,
  CountryInfoContainer,
  CountryInfoLower,
  CountryName,
} from "../styles/country_page_styles";

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
