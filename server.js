const express = require('express');

require('dotenv').config({ path: './config/.env' });

const router = require('./routes/router');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.use((req, res) => {
  res.status(404).send({ message: 'Error 404' });
});

app.listen(port);
