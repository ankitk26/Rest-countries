import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  width: 90%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  gap: 0.75rem;
  background-color: ${(props) => props.theme.elements};
  border: 0;
  padding: 0.4rem 1.5rem;
  color: ${(props) => props.theme.text};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const CountryContainer = styled.div`
  margin-top: 4rem;
  @media only screen and (min-width: 975px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
  }
`;

export const CountryName = styled.h2`
  font-weight: 700;
  margin-top: 2rem;
`;

export const CountryInfoContainer = styled.div`
  @media only screen and (min-width: 975px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    margin-top: 3rem;
    justify-content: space-between;
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

export const CountryInfoLower = styled(CountryInfo)`
  margin-top: 4rem;
  @media only screen and (min-width: 975px) {
    margin-top: 0;
  }
`;

export const BorderCountriesContainer = styled.div`
  margin-top: 3rem;
`;

export const BorderCountries = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  max-width: 100%;
`;

export const BorderCountry = styled.span`
  background-color: ${(props) => props.theme.elements};
  padding: 0.5rem 1.5rem;
  text-align: center;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
