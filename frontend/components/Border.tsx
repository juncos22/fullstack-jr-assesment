import { CountryInfo } from "@/app/models/country.model";
import React from "react";

type BorderProps = {
  country: CountryInfo;
  onSelectCountry: (code: string) => void;
};

export default function Border({ country, onSelectCountry }: BorderProps) {
  return (
    <div>
      <li
        className="hover:cursor-pointer hover:bg-indigo-600 hover:text-white"
        onClick={() => onSelectCountry(country.countryCode)}
      >
        {country.commonName}
      </li>
      <hr />
    </div>
  );
}
