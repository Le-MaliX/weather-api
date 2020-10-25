const axios = require('axios');
const { getCurrentWeatherZip } = require('./openWeather');
const { mockRawData, mockCityNotFound } = require('../__mocks__/data');

jest.mock('axios');

describe('Open Weather API test', () => {
  describe('Get current weather tests', () => {
    it('should return raw data of the current weather', async () => {
      axios.get.mockResolvedValue({ data: mockRawData });
      const data = await getCurrentWeatherZip(97293);
      expect(data).toEqual(mockRawData);
    });

    it('should return city not found', async () => {
      axios.get.mockResolvedValue({ data: mockCityNotFound });
      const data = await getCurrentWeatherZip(10000);
      expect(data).toEqual(mockCityNotFound);
    });
  });
});
