import React, { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";
import {
  SearchContainer,
  SearchInput,
} from "../../styles/search_country_styles";

export default function SearchCountry() {
  const {
    state: { search },
    setSearch,
  } = useContext(CountryContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <span className="material-icons">search</span>
      <SearchInput
        type="text"
        value={search}
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}
