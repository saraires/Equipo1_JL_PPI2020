const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());

const routes = require('./routes/routes');
app.use('/api/', routes);
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('json spaces',2);

app.use(morgan('dev'));

app.listen(3001, () => {
  console.log('Servidor activado en el puerto 3000');
});
