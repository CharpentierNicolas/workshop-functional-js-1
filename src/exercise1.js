const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
	return input.reduce(function (acc, arr, i) {

        while (acc.length < arr.length) {
            acc.push([]);
        }
        for (var j = 0; j < arr.length; ++j) {
            acc[j][i] = arr[j];
        }
        return acc;
    }, []);
}

module.exports = {
  zip: zip,
  run: zip
}