"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCountryInfo } from "@/app/actions";
import type { CountryInfo } from "@/app/models/country.model";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import Border from "@/components/Border";
import { useRouter } from "next/navigation";
import PopulationChart from "@/components/PopulationChart";
import Link from "next/link";

export default function CountryInfo() {
  const params = useParams();
  const [countryData, setCountryData] = useState<CountryInfo>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getCountry = async () => {
      try {
        if (params.code) {
          setLoading(true);
          const data = await getCountryInfo(params.code as string);
          setCountryData(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [params.code]);

  return (
    <div className="py-5">
      {countryData && (
        <div>
          <div className="border border-blue-300 rounded-md h-fit">
            <h3 className="text-4xl text-center font-medium">
              {countryData.commonName} ({countryData.countryCode})
            </h3>
          </div>
          <div className="flex justify-evenly sm:items-start md:items-start gap-x-5 flex-wrap">
            <Image
              width={500}
              height={500}
              placeholder={"blur"}
              blurDataURL="./placeholder.png"
              className="my-3 rounded-lg"
              src={countryData.flag || "/placeholder.png"}
              alt={countryData.countryCode}
            />
            <div className="sm:w-5/12 w-full mx-4">
              <h3 className="text-2xl underline my-1">Country Borders</h3>
              {countryData.borders && (
                <ul>
                  {countryData.borders.map((b) => (
                    <Border
                      key={b.countryCode}
                      country={b}
                      onSelectCountry={(code) => {
                        router.push(`/countries/${code}`);
                      }}
                    />
                  ))}
                </ul>
              )}
              {!countryData.borders ||
                (countryData.borders.length === 0 && (
                  <h3 className="text-lg text-white font-semibold">
                    No borders for this country to show
                  </h3>
                ))}
              <Link
                className="px-5 hover:cursor-pointer hover:bg-indigo-500 hover:text-black transition-colors ease-out delay-75 font-semibold border border-indigo-500 text-indigo-500 rounded-md"
                href={"/"}
              >
                Go Back
              </Link>
            </div>
          </div>

          <div className="w-fit mx-5 my-10">
            {countryData.population && countryData.population.length > 0 ? (
              <PopulationChart data={countryData.population} />
            ) : (
              <h3 className="text-2xl text-white text-center">
                No population data for this country to show
              </h3>
            )}
          </div>
        </div>
      )}
      {loading && (
        <div className="mx-auto my-10 w-fit text-center">
          <Spinner sizeClass={"size-20"} />
        </div>
      )}
    </div>
  );
}
