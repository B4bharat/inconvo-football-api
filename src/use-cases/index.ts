import makeCreateTeam from './create-team';
import makeListTeams from './list-teams';
import { readDataFile, writeToFile, updateExisting } from '../data-access';

const createTeam = makeCreateTeam({
	readDataFile,
	writeToFile,
	updateExisting,
});

const listTeams = makeListTeams({
	readDataFile,
});

const teamService = Object.freeze({
	createTeam,
});

export default teamService;

export { createTeam, listTeams };
