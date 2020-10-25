const handler = require('./root');

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

describe('Weather', () => {
  describe('Get', () => {
    it('should call all the functions and return 200 and data', async () => {
      const res = mockResponse();

      handler().get({}, res);

      expect(res.send.mock.calls).toEqual([['Hello, World!']]);
    });
  });
});
