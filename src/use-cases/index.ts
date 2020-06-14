import makeCreateTeam from './create-team';
import makeListTeams from './list-teams';
import makeTeamDetails from './team-details';
import { readDataFile, writeToFile, updateExisting } from '../data-access';

const createTeam = makeCreateTeam({
	readDataFile,
	writeToFile,
	updateExisting,
});

const listTeams = makeListTeams({
	readDataFile,
});

const teamDetails = makeTeamDetails({
	readDataFile,
});

const teamService = Object.freeze({
	createTeam,
});

export default teamService;

export { createTeam, listTeams, teamDetails };
