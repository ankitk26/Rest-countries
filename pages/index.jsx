import { useContext, useEffect } from "react";
import Countries from "../components/home/Countries";
import FilterCountry from "../components/home/FilterCountry";
import SearchCountry from "../components/home/SearchCountry";
import { CountryContext } from "../context/CountryContext";
import { HomeContainer, SearchContainer } from "../styles/home_page_styles";

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
  const resp = await fetch("https://restcountries.com/v3.1/all");
  const countries = await resp.json().then((countries) =>
    countries.map((country) => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "",
      population: country.population,
      region: country.region,
      flag: country.flags.png,
    }))
  );

  console.log(countries[0]);
  return { props: { countries: countries } };
};
