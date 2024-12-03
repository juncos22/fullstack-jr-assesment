# Full Stack Jr. Assessment

## BACKEND

### Environment Variables

`PORT=4000` \
`BASE_URI=https://date.nager.at/api/v3` \
`HISTORICAL_POPULATION_URI=https://countriesnow.space/api/v0.1/countries/population` \
`COUNTRY_FLAGS_URI=https://countriesnow.space/api/v0.1/countries/flag/images`

### Basic Endpoints

- Get All Countries `/countries/all`
- Get Country Info `/countries/countryInfo/:code`

### Instructions to run

Once you setted all the environment variables, exec the following commands:

```bash
npm install
npm run dev
```

If you setted the `PORT` environment variable, the server will be listening on port 4000, other ways you might have to set a different port to not conflict with the frontend port.

## FRONTEND

_This project runs on the default port (3000), there's why the backend runs on port 4000_

### Environment Variables

`API_URI=http://localhost:4000/countries`

### Pages

- Country Listing (default page)
- Country Info

### Instructions to run

First, install all the dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
