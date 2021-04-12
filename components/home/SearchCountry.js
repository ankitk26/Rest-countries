import React, { useContext } from "react";
import styled from "styled-components";
import { CountryContext } from "../../context/CountryContext";

const SearchContainer = styled.div`
  background-color: ${(props) => props.theme.elements};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  color: ${(props) => props.theme.text};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.text};
    opacity: 1;
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.text};
  }
`;

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
