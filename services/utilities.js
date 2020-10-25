const validateZip = ({ query }) => {
  const zipRegex = /^[0-9]{5}$/;
  // validate zip existence
  if (!query.zip) throw new Error('Zip code is required');
  const { zip } = query;
  // validate zip with regex
  if (!zipRegex.test(zip)) throw new Error('Invalid zip code');
  return zip;
};

const formatResponse = ({
  name,
  sys,
  weather,
  main,
  dt,
}) => {
  if (!name) throw new Error('City not found');
  const data = {
    name,
    country: sys.country,
    weather: [],
    ...main,
    date: new Date(dt * 1000),
  };

  // eslint-disable-next-line no-shadow
  weather.map(({ main, description, icon }) => {
    const jsonWeather = {
      main,
      description,
      icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    };
    return data.weather.push(jsonWeather);
  });

  return data;
};

module.exports = {
  validateZip,
  formatResponse,
};
