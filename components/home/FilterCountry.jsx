import React, { useContext } from "react";
import { CountryContext } from "../../context/CountryContext";
import {
  FilterButton,
  FilterContainer,
  FilterOption,
} from "../../styles/filter_country_styles";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function FilterCountry() {
  const {
    state: { region },
    setRegion,
  } = useContext(CountryContext);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    console.log(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterButton id="regions" value={region} onChange={handleRegionChange}>
        {regions.map((region) => (
          <FilterOption key={region} value={region}>
            {region}
          </FilterOption>
        ))}
      </FilterButton>
    </FilterContainer>
  );
}
