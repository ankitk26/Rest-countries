"use client";

import { useCountries } from "@/provider/CountryProvider";
import { Country } from "@/types";
import CountryCard from "./CountryCard";

interface Props {
  countries: Country[];
}

export default function CountriesList({ countries }: Props) {
  const { region, search } = useCountries();

  const countriesByRegion = countries.filter((country) => {
    if (region === "All") {
      return true;
    }
    return country.region === region;
  });

  const filteredCountries = countriesByRegion.filter((country) => {
    if (search === "") {
      return true;
    }
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  if (filteredCountries?.length === 0) {
    return (
      <p className="mt-8 text-center text-neutral-500">No countries found</p>
    );
  }

  return (
    <>
      <h3 className="mt-8">Total - {filteredCountries.length}</h3>
      <div className="my-8 grid w-3/4 mx-auto gap-8 justify-center md:grid-cols-4 md:w-full md:max-w-full">
        {filteredCountries?.map((country: any) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </>
  );
}
