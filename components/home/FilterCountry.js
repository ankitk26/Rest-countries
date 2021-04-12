import React, { useContext } from "react";
import styled from "styled-components";
import { CountryContext } from "../../context/CountryContext";

let regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterContainer = styled.div`
  margin-top: 2rem;
  width: max-content;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  :focus {
    outline: none;
  }

  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

const FilterButton = styled.select`
  background-color: ${(props) => props.theme.elements};
  padding: 1rem 2rem;
  color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const FilterOption = styled.option`
  border: 0;
`;

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
