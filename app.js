const express = require('express');
const cors = require('cors');
const app = express();
const colorrouter = require('./src/route/colorrouter.js')
const corsOptions = {
    origin: '*',
};


app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', colorrouter);


module.exports = app;