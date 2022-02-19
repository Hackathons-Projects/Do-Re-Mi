#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');

const quote_url = "http://localhost:5000/quote";
const quote_mental = "http://localhost:5000/mental";
const quote_riddle = "http://localhost:5000/riddle";

axios({
    method: 'get',
    url: quote_url,
    headers: { 'Accept': 'application/json' },
  }).then(res => {
    const quote = res.data.problem
    const author = res.data.answer
    const log = chalk.green(`${quote} - ${author}`)
    console.log(log)
  }).catch(err => {
    const log = chalk.red(err)
    console.log(log)
})