#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const args = process.argv
const commands = ['riddle', 'quote', 'mental', 'bot', 'help']
const quote_url = "http://localhost:5000/quote";
const quote_mental = "http://localhost:5000/mental";
const quote_riddle = "http://localhost:5000/riddle";

const usage = function() {
    const usageText = `
    play riddles and get educated about mental health..
  
    usage:
      ./index.js <command>
  
      commands can be:
  
      riddle:      play riddles
      quote:       guess who said the quote
      mental:      get educated about mental health issues and its solutions through games
      bot:         talk to a bot about mental health issue
      help:        used to print the usage guide
    `
  
    console.log(usageText)
}

function errorLog(error) {
    const eLog = chalk.red(error)
    console.log(eLog)
}

function getQuotes(){
    /*axios({
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
    })*/
}

function mentalHealthGames(){
    /*axios({
        method: 'get',
        url: quote_mental,
        headers: { 'Accept': 'application/json' },
      }).then(res => {
        const quote = res.data.problem
        const author = res.data.answer
        const log = chalk.green(`${quote} - ${author}`)
        console.log(log)
      }).catch(err => {
        const log = chalk.red(err)
        console.log(log)
    })*/
}

function playriddle(){
    /*axios({
        method: 'get',
        url: quote_riddle,
        headers: { 'Accept': 'application/json' },
      }).then(res => {
        const quote = res.data.problem
        const author = res.data.answer
        const log = chalk.green(`${quote} - ${author}`)
        console.log(log)
      }).catch(err => {
        const log = chalk.red(err)
        console.log(log)
    })*/
}
  
if (args.length > 3) {
    errorLog(`Only one argument can be accepted`)
    usage()
}

if (commands.indexOf(args[2]) == -1) {
    errorLog('Invalid command passed')
    usage()
}

switch(args[2]) {
    case 'help':
        usage()
        break
    case 'quote':
        getQuotes()
        break
    case 'riddle':
        playriddle()
        break
    case 'mental':
        mentalHealthGames()
        break
    default:
        errorLog('invalid command passed')
        usage()
}