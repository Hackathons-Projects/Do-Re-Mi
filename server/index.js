const express = require("express");
const app = express();
const mental = require('./mental.json')
const riddle = require('./riddles.json')
const quote = require('./quotes.json')
require('dotenv').config({ path: './env/.env' });
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/quote", (req, res) => {
    res.send(quote)
});

app.get("/mental", (req, res) => {
    res.send(mental)
});

app.get("/riddle", (req, res) => {
    res.send(riddle)
});

app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`))