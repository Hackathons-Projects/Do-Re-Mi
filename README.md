# StormHacks

* [Description](#description)
* [Features](#features)
* [Setup](#setup)

## Description
A command line game application to play riddles and get educated about mental health.

## Features

* **Web terminal as a GUI**
* **Play more than 20 riddles**
* **Games and other exciting stuffs.**
* **Get educated toward mental health issues and its solutions.**

## Setup

Follow these steps to setup.

1. Clone this repo.
2. Run this in server directory to install all packages.
```
$ npm install i
```
3. Rename `server/env/.env.sample` to `server/env/.env`.
4. Run this to start server on port 5000.
```
$ node index.js
```
6. Move to `client` directory.
7. Run this command to install all packages.
```
$ npm install i
```
7. Change permission of `client/index.js` file to execute.
```
$ sudo chmod +x index.js
```
8. Move to `client` directory and run `index.js` file to start playing game 
```
$ ./index.js
```