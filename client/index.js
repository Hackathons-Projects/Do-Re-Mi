#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const Canvas = require('terminal-canvas');
const inquirer = require('inquirer');
const args = process.argv
const commands = ['riddle', 'quote', 'mental', 'bot', 'help', 'play']
const quote_url = "http://localhost:5000/quote";
const mental_url = "http://localhost:5000/mental";
const riddle_url = "http://localhost:5000/riddle";

const usage = function() {
    const usageText = `
    play riddles and get educated about mental health..
  
    usage:
      ./index.js <command>
  
      commands can be:
  
      play:        Play song
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

async function getQuotes(){
    try{
        let res = await axios({
            method: 'get',
            url: quote_url,
            headers: { 'Accept': 'application/json' },
        })
        const problem = res.data.problem
        const answer  = res.data.answer
        const hint = res.data.hint
        let questions = [];
        questions.push({
            name: 'prob',
            type: 'input',
            message: `${problem}: (HINT: ${hint}) : `,
            validate: function (value) {
                if(answer==value){
                    return true;
                }
                else {
                    var temp = ""
                    for(let i=0;i<Math.min(answer.length, value.length);i++){
                        if(answer[i]==value[i]){
                            let eLog = chalk.green(value[i])
                            temp+=eLog
                        }
                        else{
                            let eLog = chalk.red(value[i])
                            temp+=eLog
                        }
                    }
                    return `${temp}: Wrong answer! Try Again`;
                }
            },
        });
        await inquirer.prompt(questions);
        let eLog = chalk.green("Congratulations! you cracked it!!")
        console.log(eLog)
    }
    catch(err) {
        const log = chalk.red(err)
        console.log(log)
    } 
}

async function mentalHealthGames(){
    try{
        let res = await axios({
            method: 'get',
            url: mental_url,
            headers: { 'Accept': 'application/json' },
        })
        const problem = res.data.problem
        const answer  = res.data.answer
        const hint = res.data.hint
        let questions = [];
        questions.push({
            name: 'prob',
            type: 'input',
            message: `${problem}: (HINT: ${hint}) : `,
            validate: function (value) {
                if(answer==value){
                    return true;
                }
                else {
                    var temp = ""
                    for(let i=0;i<Math.min(answer.length, value.length);i++){
                        if(answer[i]==value[i]){
                            let eLog = chalk.green(value[i])
                            temp+=eLog
                        }
                        else{
                            let eLog = chalk.red(value[i])
                            temp+=eLog
                        }
                    }
                    return `${temp}: Wrong answer! Try Again`;
                }
            },
        });
        await inquirer.prompt(questions);
        let eLog = chalk.green("Congratulations! you cracked it!!")
        console.log(eLog)
    }
    catch(err) {
        const log = chalk.red(err)
        console.log(log)
    }
}

async function playriddle(){
    try{
        let res = await axios({
            method: 'get',
            url: riddle_url,
            headers: { 'Accept': 'application/json' },
        })
        const problem = res.data.problem
        const answer  = res.data.answer
        const hint = res.data.hint
        let questions = [];
        questions.push({
            name: 'prob',
            type: 'input',
            message: `${problem}: (HINT: ${hint}) : `,
            validate: function (value) {
                if(answer==value){
                    return true;
                }
                else {
                    var temp = ""
                    for(let i=0;i<Math.min(answer.length, value.length);i++){
                        if(answer[i]==value[i]){
                            let eLog = chalk.green(value[i])
                            temp+=eLog
                        }
                        else{
                            let eLog = chalk.red(value[i])
                            temp+=eLog
                        }
                    }
                    return `${temp}: Wrong answer! Try Again`;
                }
            },
        });
        await inquirer.prompt(questions);
        let eLog = chalk.green("Congratulations! you cracked it!!")
        console.log(eLog)
    }
    catch(err) {
        const log = chalk.red(err)
        console.log(log)
    }
}

async function playSong(){
    
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
    case 'play':
        playSong()
        break
}