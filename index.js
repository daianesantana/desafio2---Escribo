const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = require('../../db.js');


const User = require('./models/userModel.js');

const login = require('./routes/login.js'); 
const signupRoute = require('./routes/signupRoute.js'); 

app.use('/api/v1/auth', login);
app.use('/api/v1', signupRoute);

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333');
});
