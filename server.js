const express = require('express');
const path = require('path');
const apis = require('./routes/apiRoutes')
const htmls = require('./routes/htmlRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api', apis);
app.use('/', htmls);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
