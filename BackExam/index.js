
const express = require('express');
const app = new express();
const morgan = require('morgan');

const routes= require('./routes/router');

const cors= require('cors');
app.use(cors());
require('dotenv').config();
require('./db/connection');

app.use(morgan('dev'));
// app.use(express.static('public'));
app.use("/",routes);




app.listen(process.env.PORT, () => {
    console.log(`Server is active on Port ${process.env.PORT}`);
});