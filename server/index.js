const express = require("express");
const app = express();
const mental = require('./mental.json')
const riddle = require('./riddles.json')
const quote = require('./quotes.json')
require('dotenv').config({ path: './env/.env' });
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/quote", (req, res) => {
    const maxi = Object.keys(quote).length;
    const random = Math.floor(Math.random() * (maxi - 1) + 1);
    res.send(quote[random])
});

app.get("/mental", (req, res) => {
    const maxi = Object.keys(mental).length;
    const random = Math.floor(Math.random() * (maxi - 1) + 1);
    res.send(mental[random])
});

app.get("/riddle", (req, res) => {
    const maxi = Object.keys(riddle).length;
    const random = Math.floor(Math.random() * (maxi - 1) + 1);
    res.send(riddle[random])
});

app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`))