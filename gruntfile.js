const _ = require('underscore');
const libumd = require('libumd');

const findDuplicates = function (sourceArray, prop) {
	let duplicates = [];
	let groupedByCount = _.countBy(sourceArray, function (item) {
		return item[prop];
	});

	for (let name in groupedByCount) {
		if (groupedByCount[name] > 1) {
			let whereClause = [];
			whereClause[prop] = name;
			_.where(sourceArray, whereClause).map(function (item) {
				duplicates.push(item);
			});
		}
	}

	return _.uniq(_.pluck(duplicates, prop));
};

const getJSON = function (grunt) {
	let content = '';
	try {
		content = grunt.file.readJSON("data.json");
	} catch (e) {
		grunt.fail.fatal("data.json is not valid JSON. Error: " + e);
	}
	return content;
};


module.exports = function (grunt) {

	function validate () {
		let content = getJSON(grunt);

		// check country names and country shortcodes are unique
		let duplicateCountryNames = findDuplicates(content, 'countryName');
		if (duplicateCountryNames.length > 0) {
			grunt.fail.fatal('The country names are not unique - duplicates: ' + duplicateCountryNames);
		}
		let duplicateCountryShortCodes = findDuplicates(content, 'countryShortCode');
		if (duplicateCountryShortCodes.length > 0) {
			grunt.fail.fatal('The country short codes are not unique - duplicates: ' + duplicateCountryShortCodes);
		}

		// now check region names and short codes are unique for each country
		content.forEach(function (countryData) {
			let duplicateRegionNames = findDuplicates(countryData.regions, 'name');
			if (duplicateRegionNames.length > 0) {
				grunt.fail.fatal('The region names for ' + countryData.countryName + ' are not unique - duplicates: ' + duplicateRegionNames);
			}
		});
		console.log("PASS!");
	}

	function umdify () {
		let content = getJSON(grunt);

		let output = libumd("return " + JSON.stringify(content, null, 2) + ";", {
			globalAlias: "countryRegionData",
			indent: 2
		});

		grunt.file.write("data.js", output);

		console.log('Successfully made a UMD module!');
	}

	grunt.registerTask("default", ['validate']);
	grunt.registerTask("validate", validate);
	grunt.registerTask("umdify", umdify);
};
