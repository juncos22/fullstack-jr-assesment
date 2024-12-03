import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const getCountryInfo = async (code) => {
  try {
    let { status, data } = await axios.get(
      `${process.env.BASE_URI}/CountryInfo/${code}`
    );
    if (status === 200) {
      return {
        commonName: data.commonName,
        countryCode: data.countryCode,
        region: data.region,
        borders: data.borders,
      };
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};
const getCountryPopulation = async (commonName) => {
  try {
    const { status, data } = await axios.get(
      `${process.env.HISTORICAL_POPULATION_URI}/q?country=${commonName}`
    );
    if (status === 200) {
      return {
        population: data.data.populationCounts,
      };
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};
const getCountryFlag = async (commonName) => {
  try {
    const { status, data } = await axios.get(
      `${process.env.COUNTRY_FLAGS_URI}/q?country=${commonName}`
    );
    if (status === 200) {
      return {
        flag: data.data.flag.trim(),
      };
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

export default {
  getCountryInfo,
  getCountryPopulation,
  getCountryFlag,
};
