const axios = require('axios');

const getCurrentWeatherZip = async (zip) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&zip=${zip},MX&appid=${process.env.OPEN_WEATHER_API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

module.exports = {
  getCurrentWeatherZip,
};
