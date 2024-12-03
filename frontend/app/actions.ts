"use server";

import api from "@/app/api/config";
import { CountryInfo, CountryList } from "@/app/models/country.model";
import { CountryResponse } from "@/app/models/response.model";

export async function getCountries() {
  try {
    const { data } = await api.get<CountryResponse>("/all");
    // console.log(data);

    let countries: CountryList[] = [];
    if (data.success) {
      countries = data.data as CountryList[];
      return countries;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCountryInfo(code: string) {
  try {
    const { data } = await api.get<CountryResponse>(`/countryInfo/${code}`);
    // console.log(data);

    let countryInfo: CountryInfo | undefined;
    if (data.success) {
      countryInfo = data.data as CountryInfo;
    } else {
      console.log("Error trying to get the country info");
    }
    return countryInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
