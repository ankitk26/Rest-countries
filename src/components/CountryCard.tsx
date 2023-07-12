import { Country } from "@/types";
import { formatPopulation } from "@/utils/formatPopulation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <Link href={`/countries/${country.cca2}`} passHref>
      <div className="bg-secondary rounded-lg max-w-full pb-8 cursor-pointer country-card-shadow">
        <div className="w-full h-[200px] relative">
          <Image
            src={country.flags.svg}
            alt={country.name.common}
            fill={true}
            className="rounded-tl-lg rounded-tr-lg border-b"
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl">{country.name.common}</h3>

          <div className="flex flex-col mt-6 gap-3">
            <div className="flex items-center gap-1">
              <strong>Population: </strong>
              <span>{formatPopulation(country.population)}</span>
            </div>
            {country.region && (
              <div className="flex items-center gap-1">
                <strong>Region: </strong>
                <span>{country.region}</span>
              </div>
            )}
            {country.capital && (
              <div className="flex items-center gap-1">
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
