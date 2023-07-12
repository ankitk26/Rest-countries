"use client";

import { createContext, useContext, useState } from "react";

interface ContextProps {
  search: string;
  region: string;
  theme: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}

const CountryContext = createContext({} as ContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export default function CountryProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [theme, setTheme] = useState("light");

  return (
    <CountryContext.Provider
      value={{
        search,
        region,
        theme,
        setSearch,
        setRegion,
        setTheme,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export const useCountries = () => useContext(CountryContext);
