const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rotas = require('./routes/main');

app.listen(5500);
