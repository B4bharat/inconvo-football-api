/**
 * IN THE SCENARIO OF DATABASE CONNECTION, IT WILL BE DB CONNECTION SCRIPT HERE
 */
import { promises as fsPromises } from 'fs';

import path from 'path';

import { TeamDetails } from '../entities/team';

// TODO: File path name should be generic
const pathToFile = path.join(__dirname, '../data/footballTeams.json');

async function readDataFile() {
	const fileData = await fsPromises.readFile(pathToFile, 'utf8');

	return fileData;
}

async function updateExisting(updatedDetails: TeamDetails) {
	const fileDetails = await readDataFile();
	const fileDetailsJSON = JSON.parse(fileDetails);

	const existingData = fileDetailsJSON.data.findIndex((data: TeamDetails) => {
		return data.name === updatedDetails.name;
	});

	fileDetailsJSON.data.splice(existingData, 1, updatedDetails); // eslint-disable-line

	const space = 2;
	const writeResponse = await fsPromises.writeFile(
		pathToFile,
		JSON.stringify(fileDetailsJSON, null, space),
		'utf-8'
	);

	return writeResponse;
}

async function writeToFile(newDetails: TeamDetails) {
	try {
		const fileDetails = await readDataFile();
		const fileDetailsJSON = JSON.parse(fileDetails);

		fileDetailsJSON.data.push(newDetails);

		const space = 2;

		await fsPromises.writeFile(
			pathToFile,
			JSON.stringify(fileDetailsJSON, null, space)
		);
	} catch (error) {
		console.log(error);
	}
}

export { readDataFile, writeToFile, updateExisting };
