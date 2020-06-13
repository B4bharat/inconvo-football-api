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

async function readDataFile() {
	const joinedPath = path.join(__dirname, '../data/footballTeams.json');

	console.log('joinedPath', joinedPath);
	const fileData = await readFile(joinedPath, 'utf8');

	console.log('fileData', fileData);

	return fileData;
}

// want a method which would take in the the object that needs to be written to
async function writeToFile(teamDetails: TeamDetails) {
	const footballTeams = await readDataFile();

	console.log('footballTeams', JSON.parse(JSON.stringify(footballTeams)));

	const space = 2;
	const data = JSON.stringify(teamDetails, null, space);

	const writeResponse = await writeFile(
		path.join(path.dirname(''), './footballTeams.json'),
		data
	);

	return writeResponse;
}

export { readDataFile, writeToFile };
