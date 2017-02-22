# eslint-config-client-shiwaforce

## Installation
```
npm install eslint eslint-config-client-shiwaforce --save-dev
```

## Main concept, the idea behind the things below

![code quality transformation](./quality-transformation.png "Code quality transformation")

We want to work with beautiful, nicely formatted code, so with the help of eslint we aim to enforce it - as much as we can. In an ideal world everybody would write such high quality code. Until we reach this state to standardise code formatting the eslint plugin can be a great help.

## Usage

If you've installed eslint-config-client-shiwaforce locally within your project set your eslint config(`.eslintrc`) to:
```json
{
	"extends": "eslint-config-client-shiwaforce"
}
```
Run the linter by executing the command below:
```
./node_modules/.bin/eslint client/**/*.js
```

In case of a global installation the start the linter with...
```
eslint client/**/*.js
```

## Extending/Overriding the config

Add the `"rules"` key to your config then add your additional/override rules. For example, if you want to change the `"indent"` and `"eol-last"` rules from default to your own add this:
```json
{
	"extends": "eslint-config-client-shiwaforce",
	"rules": {
		"indent": [2, "space"],
		"eol-last":[0]
	}
}
```
If you use another 3rd party module (for example moment.js) and/or doesn't use all of our 3rd party modules (for example angular.js), you can override that in `globals` block:
```
{
	"extends": "eslint-config-client-shiwaforce",
	"globals": {
		"angular": false,
		"moment": true
	},
}
```

## Additional information about rules

[Eslint](http://eslint.org)
