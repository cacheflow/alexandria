#!/usr/bin/env node

'use strict'

let program = require('commander')

let VERSION = require('./package.json').version;
let Alexandria = require('./index.js');
let alex = new Alexandria()
let printToConsole = true

program
  .version('0.0.1')
  .arguments('<url>')
  .action(function (url) {
    alex.summarizeAndRead(url, printToConsole)
	})


program.parse(process.argv);
