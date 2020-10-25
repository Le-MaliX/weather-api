const rootHandler = () => ({
  get: (req, res) => res.send('Hello, World!'),
});

module.exports = rootHandler;
