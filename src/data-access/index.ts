/**
 * IN THE SCENARIO OF DATABASE CONNECTION, IT WILL BE DB CONNECTION SCRIPT HERE
 */
import fs from 'fs';
import path from 'path';
import util from 'util';

// Convert readFile, writeFile into Promise version of the same
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// TODO: File path name should be generic
const pathToFile = path.join(__dirname, '../data/footballTeams.json');

async function readDataFile() {
	const fileData = await readFile(pathToFile, 'utf8');

	return fileData;
}

async function writeToFile(newDetails: any) {
	const fileDetails = await readDataFile();
	const fileDetailsJSON = JSON.parse(fileDetails);

	fileDetailsJSON.data.push(newDetails);

	const space = 2;
	const writeResponse = await writeFile(
		pathToFile,
		JSON.stringify(fileDetailsJSON, null, space)
	);

	console.log('writeResponse', writeResponse);

	return writeResponse;
}

export { readDataFile, writeToFile };
