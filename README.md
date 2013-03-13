## Traducteur

A super simple Google Translation API client for Node.js.

### Example

```js
var traducteur = require('traducteur')('API key');

traducteur.translate({
	q: 'Bonjour',
	target: 'en'
}, callback);
```

### Usage

#### traducteur.translate(options, callback)

`options` is an object that follows [Google's REST documentation](https://developers.google.com/translate/v2/using_rest). `callback` is a function that returns with an error if exists, otherwise a body. `callback(err, body)`

#### traducteur.detect(options, callback)

`options` is an object that follows [Google's REST documentation](https://developers.google.com/translate/v2/using_rest). `callback` is a function that returns with an error if exists, otherwise a body. `callback(err, body)`

#### traducteur.languages(callback)

`callback` is a function that returns with an error if exists, otherwise a body. `callback(err, body)`

### Tests

Because Google Translate's API is paid only, to have your tests pass you will have to add your API key to `test/index.js`. Once done, just run:

```
npm test
```
