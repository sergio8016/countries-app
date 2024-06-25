import {CountryInterface} from "./country.interface";
import {Continent} from "./region.type";

export interface CacheInterface {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}

interface TermCountries {
  term: string;
  countries: CountryInterface[];
}

interface RegionCountries {
  region: string;
  countries: CountryInterface[];
}
