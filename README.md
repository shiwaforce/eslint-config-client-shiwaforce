# eslint-config-client-shiwaforce

## Main concept, the idea behind the things below

![code quality transformation](./quality-transformation.png "Code quality transformation")

We want to work with beautiful, nicely formatted code, so with the help of eslint we aim to enforce it - as much as we can. In an ideal world everybody would write such high quality code. Until we reach this state to standardise code formatting the eslint plugin can be a great help.

## Installation

```
npm install eslint eslint-config-client-shiwaforce --save-dev
```

## Usage

If you've installed eslint-config-client-shiwaforce locally within your project create the eslint.config.js file at the root of your node project.
(see details on the [eslint page](http://eslint.org/docs/user-guide/command-line-interface))

```js
import eslintConfigClientShiwaforce from 'eslint-config-client-shiwaforce';
export default [
	eslintConfigClientShiwaforce,
	...
];
```
Run the linter by executing the command below:

```
./node_modules/.bin/eslint client/**/*.js
```

In case of a global installation the start the linter with...

```
eslint client/**/*.js
```

If running eslint gives a message indicating that running `eslint --init` is necessary then you created the .eslintrc file in the wrong place.

This command does NOT walk the entire dependency tree based on `require`-s or `import`-s, it only walks the file or files listed here. Of course, wild card characters can be used. For more information please visit the dedicated page at eslint ([cli docs](http://eslint.org/docs/user-guide/command-line-interface))

## Extending/Overriding the config

Add the `"rules"` key to your config then add your additional/override rules. For example, if you want to change the `"indent"` and `"eol-last"` rules from default to your own add this:

```js
import eslintConfigClientShiwaforce from 'eslint-config-client-shiwaforce';
export default [
	eslintConfigClientShiwaforce,
	{
		rules: {
			'indent': [2, 'space'],
			'eol-last': [0]
		}
	}
];
```

## Additional information about rules
[Eslint](http://eslint.org)
