export interface Population {
  year: number;
  value: number;
}

export interface CountryList {
  countryCode: string;
  name: string;
}
export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: CountryInfo[];
  population: Population[];
  flag: string;
}
