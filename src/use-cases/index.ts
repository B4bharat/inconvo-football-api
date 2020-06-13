import makeCreateTeam from './create-team';
import { readDataFile, writeToFile, updateExisting } from '../data-access';

const createTeam = makeCreateTeam({
	readDataFile,
	writeToFile,
	updateExisting,
});

const teamService = Object.freeze({
	createTeam,
});

export default teamService;

export { createTeam };
