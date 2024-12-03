import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import countryRoutes from "./country.routes.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/countries", countryRoutes);

app.listen(PORT, () => {
  console.log(`Service started on port ${PORT}`);
});
