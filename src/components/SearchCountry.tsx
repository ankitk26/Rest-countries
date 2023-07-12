"use client";

import { useCountries } from "@/provider/CountryProvider";
import { Search } from "lucide-react";

export default function SearchCountry() {
  const { search, setSearch } = useCountries();

  return (
    <div className="bg-secondary px-4 py-2 rounded-lg flex gap-4 items-center border border-neutral-200">
      <Search size={16} />
      <input
        className="bg-transparent border-none w-full focus:outline-none"
        type="text"
        value={search}
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
