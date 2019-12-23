const wp = require('@cypress/webpack-preprocessor');
const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
	const options = {
		webpackOptions: require('../../webpack.config'),
	};
	const file = config.env.configFile || 'dev';
	on('file:preprocessor', wp(options));
	return getConfigurationByFile(file);
};

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve(`cypress.${file}.json`);
	return fs.readJson(pathToConfigFile);
}
