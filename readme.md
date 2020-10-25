# Weather API
This small API was created as a brief challenge to participate in the [Golang bootcamp by Wizeline](https://academy.wizeline.com/course/golang-bootcamp/) it consists in two only two endpoints, a Hello world endpoint and one that consumes the [Open weather API](https://openweathermap.org/api) to tell you the curren weather on a mexican zip code.

## Getting started
### Prerequisites
- You need to have installed Node 15.0.1 or later and npm 7.0.3 or later.
- You need tho have an API key from the [Open weather API](https://openweathermap.org/api).
### Installing
1. Clone the repository in your local machine
2. Crete an `.env` file in the config folder, you can use the `example.env` file as draft. You'll need to put your [Open weather API key](https://home.openweathermap.org/api_keys).
3. Run `npm install` to install all the dependencies.

### Usage 
1. You can start the server with the `npm start` command or with `npm run dev` for start it in development mode with nodemon
2. Once the server is running you can go to your [Localhost port 3000](http://localhost:3000/) and you'll get the message `Hello, World!`. That's the firs endpoint
3. The second endpoint is a GET request to the route `/weather`. this endpoint expects for a query called zip that should be a mexican zip code. i.e: `http://localhost:3000/weather?zip=45050`
4. if the zip code is a valid one you should receive a JSON with the following fields:
  ```
  {
    name: city name,
    country: country code
    weather: [
      {
        main: Group of weather parameters (Rain, Snow, Extreme etc.)
        description: Weather condition within the group.
        icon: an url for the Weather icon id
      }
    ],
    temp: Temperature in Celsius degrees
    feels_like: This temperature parameter accounts for the human  perception of weather
    temp_min: Minimum temperature at the moment,
    temp_max: Maximum temperature at the moment,
    pressure: Atmospheric pressure in hPa,
    humidity: Humidity %,
    date: Time of data calculation,
  }
  ```
## Running the tests
- The unit testing can be done with the command `npm test`  
- For watching the tests during development you can use `npm run test-watch`
- For checking the coverage you can run the command `npm run test-cover`

## Code style
This project was developed using the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) via the Eslint library

## Build with
- [Node 15.0.1](https://nodejs.org/es/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Npm 7.03](https://www.npmjs.com/): A package manager for JavaScript.
- [ExpressJS 4.17.1](https://expressjs.com/es/): A fast, unopinionated, minimalist web framework for Node.js
- Dependencies:
  - axios
  - dotenv
  - express
  - eslint
  - jest
  - nodemon
