'use strict'
let summary = require('node-tldr');
let say = require('say')

class ReadThis {
  constructor() {
    this._isCommandLine = false
  }

  getSummary (url) {
    return new Promise ((resolve, reject) => {
      summary.summarize(url, ((result, failure) => {
        if ( !this.isValidUrl(url) ) {
          reject("Please pass a valid url like http://www.example.com/.")
        }
        else if ( failure ) {
          reject(result.error)
        }
        else {
          resolve(result.summary.toString())
        }
      }))
    })
  }

  isValidUrl (url) {
    let pattern = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)" +
    "*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\" + ".[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
    let regexQuery = new RegExp(pattern, 'i')
    return regexQuery.test(url) ? true : false
  }

  readSummary (summary, bool) {
    if(bool) {
      console.log(summary)
    }
    say.speak(summary)
  }

  summarizeAndRead(url, bool) {
    this.getSummary(url)
    	.then(summary => this.readSummary(summary, bool))
    		.catch(err => err)
  }
}

module.exports = ReadThis
