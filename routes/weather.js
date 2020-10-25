const { openWeather, utilities } = require('../services');

const weatherHandler = () => ({
  get: async (req, res) => {
    try {
      const zip = utilities.validateZip(req);
      let data = await openWeather.getCurrentWeatherZip(zip);
      data = utilities.formatResponse(data);
      res.status(200).send(data);
    } catch (e) {
      if (e.message === 'Request failed with status code 404') {
        res.status(404).send({ [e.name]: 'City was not found' });
      } else {
        res.status(400).send({ [e.name]: e.message });
      }
    }
  },
});

module.exports = weatherHandler;
