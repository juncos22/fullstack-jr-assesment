import { CountryInfo, CountryList } from "./country.model";

export interface CountryResponse {
  success: boolean;
  data: CountryList[] | CountryInfo;
}
