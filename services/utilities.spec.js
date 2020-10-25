const { utilities: { validateZip, formatResponse } } = require('./index');
const Data = require('../__mocks__/data');

describe('Utilities test', () => {
  describe('Validate data tests', () => {
    let req;
    const mockRequest = () => {
      const request = {};
      request.query = jest.fn().mockReturnValue(request);
      return request;
    };

    beforeEach(() => {
      req = mockRequest();
      req = { query: {} };
    });

    it('should throw an error when no zip is passed', () => {
      expect(() => validateZip(req)).toThrow();
    });

    it('it should throw an error when invalid zip is passed', () => {
      req.query.zip = 'Not a zip code';

      expect(() => validateZip(req)).toThrow();
    });

    it('should return a valid zip code', () => {
      req.query.zip = 12345;

      expect(validateZip(req)).toEqual(12345);
    });
  });

  describe('Format response test', () => {
    it('should return data in the correct format', () => {
      expect(formatResponse(Data.mockRawData)).toStrictEqual(Data.formattedData);
    });

    it('should throw an error when the city is not fount', () => {
      expect(() => formatResponse(Data.mockCityNotFound)).toThrow('City not found');
    });
  });
});
