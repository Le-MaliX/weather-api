const handler = require('./weather');
const { mockRawData, formattedData } = require('../__mocks__/data');
const { openWeather, utilities } = require('../services');

jest.mock('../services');

const mockRequest = () => {
  const req = {};
  req.query = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe('Weather', () => {
  describe('Get', () => {
    let req; let res;

    beforeEach(() => {
      req = mockRequest();
      req = { query: {} };
      res = mockResponse();
    });

    it('should call all the functions and return 200 and data', async () => {
      req.query.zip = 97392;

      utilities.validateZip.mockReturnValue(97392);
      openWeather.getCurrentWeatherZip.mockResolvedValue(mockRawData);
      utilities.formatResponse.mockReturnValue(formattedData);

      await handler().get(req, res);
      expect(utilities.validateZip).toHaveBeenCalledWith({ query: { zip: 97392 } });
      expect(openWeather.getCurrentWeatherZip).toHaveBeenCalledWith(97392);
      expect(utilities.formatResponse).toHaveBeenCalledWith(mockRawData);
      expect(res.status.mock.calls).toEqual([[200]]);
      expect(res.send.mock.calls).toEqual([[formattedData]]);
    });

    it('should return 400 when no zip code is sent', async () => {
      utilities.validateZip.mockImplementation(() => { throw new Error('Zip code is required'); });

      await handler().get(req, res);
      expect(res.status.mock.calls).toEqual([[400]]);
      expect(res.send.mock.calls).toEqual([[{ Error: 'Zip code is required' }]]);
    });

    it('should return 400 when invalid zip code', async () => {
      utilities.validateZip.mockImplementation(() => { throw new Error('Invalid zip code'); });

      await handler().get(req, res);
      expect(res.status.mock.calls).toEqual([[400]]);
      expect(res.send.mock.calls).toEqual([[{ Error: 'Invalid zip code' }]]);
    });

    it('should return 404 when city is not found', async () => {
      req.query.zip = 973922;

      utilities.validateZip.mockReturnValue(97392);
      openWeather.getCurrentWeatherZip.mockResolvedValue(mockRawData);
      utilities.formatResponse.mockImplementation(() => { throw new Error('Request failed with status code 404'); });

      await handler().get(req, res);
      expect(res.status.mock.calls).toEqual([[404]]);
      expect(res.send.mock.calls).toEqual([[{ Error: 'City was not found' }]]);
    });
  });
});
