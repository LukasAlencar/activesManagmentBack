const express = require('express');
const cors = require('cors');

require('dotenv').config();

var app = express();

app.use(cors())

app.use(express.json());
const RegisterActivesRoutes = require('./routes/RegisterActivesRoutes');

app.use(RegisterActivesRoutes)

const port = process.env.PORT || 3001;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

require("./database/connection");