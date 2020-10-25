const mockRawData = {
  coord: {
    lon: -89.7,
    lat: 20.92,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03n',
    },
  ],
  base: 'stations',
  main: {
    temp: 26,
    feels_like: 31.35,
    temp_min: 26,
    temp_max: 26,
    pressure: 1012,
    humidity: 94,
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 50,
  },
  clouds: {
    all: 40,
  },
  dt: 1603521059,
  sys: {
    type: 1,
    id: 7140,
    country: 'MX',
    sunrise: 1603540666,
    sunset: 1603582068,
  },
  timezone: -18000,
  id: 0,
  name: 'Itzincab',
  cod: 200,
};
const formattedData = {
  name: 'Itzincab',
  country: 'MX',
  weather: [
    {
      main: 'Clouds',
      description: 'scattered clouds',
      icon: 'https://openweathermap.org/img/wn/03n@2x.png',
    },
  ],
  temp: 26,
  feels_like: 31.35,
  temp_min: 26,
  temp_max: 26,
  pressure: 1012,
  humidity: 94,
  date: new Date(1603521059000),
};
const mockCityNotFound = {
  cod: '404',
  message: 'city not found',
};

module.exports = {
  mockRawData,
  formattedData,
  mockCityNotFound,
};
