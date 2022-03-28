import Link from "next/link";
import {
  CountryCardContainer,
  CountryFlag,
  CountryInfo,
  CountryInfoContainer,
  CountryName,
  FlagContainer,
  InfoItem,
} from "../../styles/country_styles";
import { formatPopulation } from "../../utils/formatPopulation";

export default function CountryCard({ country }) {
  return (
    <Link href={`/${country.cca2}`}>
      <CountryCardContainer>
        <FlagContainer>
          <CountryFlag layout="fill" src={country.flag} alt={country.name} />
        </FlagContainer>

        <CountryInfoContainer>
          <CountryName>{country.name}</CountryName>

          <CountryInfo>
            <InfoItem>
              <strong>Population: </strong>
              <span>{formatPopulation(country.population)}</span>
            </InfoItem>
            {country.region && (
              <InfoItem>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </InfoItem>
            )}
            {country.capital && (
              <InfoItem>
                <strong>Capital: </strong>
                <span>{country.capital}</span>
              </InfoItem>
            )}
          </CountryInfo>
        </CountryInfoContainer>
      </CountryCardContainer>
    </Link>
  );
}
