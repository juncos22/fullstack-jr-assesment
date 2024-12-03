import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import countryService from "./utils/country.utils.js";

dotenv.config();

const routes = express.Router();

routes.get("/all", async (req, res) => {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URI}/AvailableCountries`
    );
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    res.status(400).json({ success: false, stack: error });
  }
});

routes.get("/countryInfo/:code", async (req, res) => {
  try {
    const { code } = req.params;
    let result = await countryService.getCountryInfo(code);

    let population = await countryService.getCountryPopulation(
      result.commonName
    );
    let flag = await countryService.getCountryFlag(result.commonName);

    result = { ...result, ...population, ...flag };
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).json({ success: false, stack: error });
  }
});

export default routes;
