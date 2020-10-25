const express = require('express');
const root = require('./root');
const weather = require('./weather');

const router = express.Router();

router.get('/', root().get);
router.get('/weather', weather().get);

module.exports = router;
