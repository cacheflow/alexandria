#!/usr/bin/env node

'use strict'

let program = require('commander')

let VERSION = require('./package.json').version;
let ReadThis = require('./index.js');
let readThis = new ReadThis()
let printToConsole = true

program
  .version('0.0.1')
  .arguments('<url>')
  .action(function (url) {
    readThis.summarizeAndRead(url, printToConsole)
	})


program.parse(process.argv);
