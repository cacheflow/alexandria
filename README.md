# Alexandria

![Alexandria](library-of-alexandria.jpg)


## Overview
  Summarizes and reads articles to you via the command line

## Installation

### Command-line usage

npm install -g alexandria

alexandria "url"

### Module-usage:

Install the package with:

```
npm install --save alexandria
```
## How to use

```js
let Alexandria = require('alexandria')
let alexandria = new Alexandria()
```

```js
summarizeAndRead(url, optional boolean)
```

only requires a url. You can pass an optional boolean of true
to it as a second parameter to have it print your summary to the console while it's being read. When using alexandria from the command line the boolean is passed internally to allow printing to the console.

# Example

### Command-line:

alexandria http://www.cnn.com/2017/02/07/us/harambe-cheeto-trnd/


### Module-usage

```js
alexandria.summarizeAndRead("http://www.cnn.com/2017/02/07/us/harambe-cheeto-trnd/")
```


The output of the above examples will be:

Really, we did.To salt the wound, there are now dozens of Harambe Cheeto-related items polluting the eBay listings, a cruel burlesque at the nadir of consumerism and irony and possibly humanity itself.

If you want one, you can buy one with your hard-earned money.  We're going to choose NOT to believe the Cheeto -- which "looks like Harambe the Gorilla" in the way any given Cheeto looks like anything -- sold for almost $100,000 after a 132-episode bidding war.  Read MoreThat's what the eBay page says, but if you believe that, then you are admitting the flame of human innovation dies here, snuffed out under an amorphous log of cornmeal and monosodium glutamate.
