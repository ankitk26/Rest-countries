import Link from "next/link";
import Router from "next/router";
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
          src={country.flags.svg}
          alt={country.name}
        />

        <div>
          <CountryName>{country.name.common}</CountryName>

          <CountryInfoContainer>
            <CountryInfo>
              <div>
                <strong>Native name: </strong>
                <span>{country.name.official}</span>
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
                <span>{country.tld[0]}</span>
              </div>
              <div>
                <strong>Currencies: </strong>
                <span>
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </div>
              <div>
                <strong>Languages: </strong>
                <span>
                  {Object.values(country.languages)
                    .map((currency) => currency)
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
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const paths = countries.map((country) => ({
    params: { country_code: country.cca2 },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const code = params.country_code;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const json = await res.json();

  let borders = null;
  if (json[0].borders) {
    const borderCodes = json[0].borders.join(",");
    const borderCountriesResp = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCodes}`
    );
    const borderCountriesJson = await borderCountriesResp.json();

    borders = borderCountriesJson.map((country) => country.name.common);
  }

  return { props: { country: json[0], borders } };
};
