/**
 * IN THE SCENARIO OF DATABASE CONNECTION, IT WILL BE DB CONNECTION SCRIPT HERE
 */
import fs from 'fs';
import path from 'path';
import util from 'util';

// Convert readFile, writeFile into Promise version of the same
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

interface TeamDetails {
	name: string;
	img: string;
}
// TODO: File path name should be generic
const pathToFile = path.join(__dirname, '../data/footballTeams.json');

async function readDataFile() {
	const fileData = await readFile(pathToFile, 'utf8');

	return fileData;
}

// want a method which would take in the the object that needs to be written to
async function writeToFile(teamDetails: TeamDetails) {
	const fileDetails = await readDataFile();
	const fileDetailsJSON = JSON.parse(fileDetails);

	fileDetailsJSON.teams.push(teamDetails);

	const space = 2;
	const writeResponse = await writeFile(
		pathToFile,
		JSON.stringify(fileDetailsJSON, null, space)
	);

	return writeResponse;
}

export { readDataFile, writeToFile };
