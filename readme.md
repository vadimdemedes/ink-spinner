# ink-spinner [![Build Status](https://travis-ci.org/vadimdemedes/ink-spinner.svg?branch=master)](https://travis-ci.org/vadimdemedes/ink-spinner)

> Spinner component for [Ink](https://github.com/vadimdemedes/ink). Uses [cli-spinners](https://github.com/sindresorhus/cli-spinners) for the collection of spinners.


## Install

```
$ npm install ink-spinner
```


## Usage

```js
const {h, render} = require('ink');
const Spinner = require('ink-spinner');

render((
	<div>
		<Spinner green/> Loading
	</div>
));
```

<img src="media/demo.gif" width="482">


## Props

All props except the own ones listed below are passed as-is to `<Text>`, which means you can easily apply any color, without wrapping `<Spinner>` in `<Text>` manually.

### type

Type: `string`<br>
Defaults: `dots`

Type of a spinner. See [cli-spinners](https://github.com/sindresorhus/cli-spinners) for available spinners.


## License

MIT © [Vadim Demedes](https://github.com/vadimdemedes)
