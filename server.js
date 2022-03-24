const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', htmlRoutes)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
