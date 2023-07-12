import CountriesList from "@/components/CountriesList";
import FilterCountry from "@/components/FilterCountry";
import SearchCountry from "@/components/SearchCountry";
import { Country } from "@/types";

export const metadata = {
  title: "All countries",
};

export default async function HomePage() {
  const countries = (await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  )) as Country[];

  return (
    <div className="my-4 mx-auto w-11/12">
      <div className="md:flex md:items-center md:justify-between">
        <SearchCountry />
        <FilterCountry />
      </div>
      <CountriesList countries={countries} />
    </div>
  );
}
