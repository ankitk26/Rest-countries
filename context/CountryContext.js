import { createContext, useReducer } from "react";

export const CountryContext = createContext();

const initialState = {
  theme: "light",
  filteredCountries: null,
  search: "",
  region: "All",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTERED_COUNTRIES":
      return {
        ...state,
        filteredCountries: action.payload.countries.filter(
          (country) =>
            country.name.toLowerCase().includes(state.search.toLowerCase()) ||
            country.capital.toLowerCase().includes(state.search.toLowerCase())
        ),
      };
    case "SET_SEARCH":
      return { ...state, search: action.payload.search };
    case "SET_REGION":
      return { ...state, region: action.payload.region };
    case "FILTER_BY_REGION":
      return {
        ...state,
        filteredCountries:
          state.region === "All"
            ? action.payload.countries
            : action.payload.countries.filter(
                (country) => country.region === state.region
              ),
      };
    case "SET_THEME":
      return { ...state, theme: action.payload.mode };

    default:
      return state;
  }
};

export default function CountryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterCountries = (countries) => {
    dispatch({ type: "GET_FILTERED_COUNTRIES", payload: { countries } });
  };

  const setSearch = (search) => {
    dispatch({ type: "SET_SEARCH", payload: { search } });
  };

  const filterCountriesByRegion = (countries) => {
    dispatch({ type: "FILTER_BY_REGION", payload: { countries } });
  };

  const setRegion = (region) => {
    dispatch({ type: "SET_REGION", payload: { region } });
  };

  const toggleTheme = (mode) => {
    dispatch({ type: "SET_THEME", payload: { mode } });
  };

  return (
    <CountryContext.Provider
      value={{
        state,
        filterCountries,
        setSearch,
        setRegion,
        filterCountriesByRegion,
        toggleTheme,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
