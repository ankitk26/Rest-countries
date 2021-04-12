import { useContext, useEffect } from "react";
import styled from "styled-components";
import Countries from "../components/home/Countries";
import FilterCountry from "../components/home/FilterCountry";
import SearchCountry from "../components/home/SearchCountry";
import { CountryContext } from "../context/CountryContext";

const HomeContainer = styled.div`
  margin: 2rem auto;
  width: 90%;
`;

const SearchContainer = styled.div`
  @media only screen and (min-width: 975px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function Home({ countries }) {
  const {
    state: { filteredCountries, search, region },
    filterCountries,
    filterCountriesByRegion,
  } = useContext(CountryContext);

  useEffect(() => {
    filterCountries(countries);
  }, [search]);

  useEffect(() => {
    filterCountriesByRegion(countries);
  }, [region]);

  return (
    <HomeContainer>
      <SearchContainer>
        <SearchCountry />
        <FilterCountry />
      </SearchContainer>
      <Countries countries={search || region ? filteredCountries : countries} />
    </HomeContainer>
  );
}

export const getStaticProps = async () => {
  const resp = await fetch("https://restcountries.eu/rest/v2/all");
  let countries = await resp.json();

  countries = countries.map((country) => ({
    name: country.name,
    capital: country.capital,
    population: country.population,
    region: country.region,
    flag: country.flag,
  }));

  return { props: { countries } };
};
