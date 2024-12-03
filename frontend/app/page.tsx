"use client";

import Spinner from "@/components/Spinner";
import Card from "@/components/Card";
import { getCountries } from "@/app/actions";
import { useEffect, useState } from "react";
import { CountryList } from "@/app/models/country.model";
import { useRouter } from "next/navigation";

export default function Home() {
  const [countries, setCountries] = useState<CountryList[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getCountries();
      if (result) {
        setCountries(result);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div>
        <h3 className="text-2xl text-center text-white my-3">
          Next.js - Countries App
        </h3>
      </div>
      {loading && (
        <div className="mx-auto my-10 w-fit text-center">
          <Spinner sizeClass={"size-20"} />
        </div>
      )}
      {countries.length > 0 && (
        <div className="flex items-center justify-evenly flex-wrap gap-x-3 gap-y-2 mt-10">
          {countries.map((c, i) => (
            <Card
              key={i}
              title={c.name}
              countryCode={c.countryCode}
              onCountrySelect={(code) => router.push(`/countries/${code}`)}
            />
          ))}
        </div>
      )}
    </>
  );
}
