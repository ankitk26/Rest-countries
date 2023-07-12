"use client";

import { useCountries } from "@/provider/CountryProvider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function FilterCountry() {
  const { region, setRegion } = useCountries();

  return (
    <div className="mt-8 rounded-lg md:mt-0">
      <Select value={region} onValueChange={(val) => setRegion(val)}>
        <SelectTrigger>
          <SelectValue placeholder="Filter countries by region" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {regions.map((region) => (
              <SelectItem className="border-none" key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
