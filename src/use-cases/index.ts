// Use Cases describe all our valid interactions with the entity
// All the features, just at a single glance
import makeCreateTeam from './create-team';
import makeUpdateTeam from './update-team';
import makeListTeams from './list-teams';
import makeTeamDetails from './team-details';
import { readDataFile, writeToFile, updateExisting } from '../data-access';

const createTeam = makeCreateTeam({
	writeToFile,
});

const updateTeam = makeUpdateTeam({
	readDataFile,
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

export { createTeam, listTeams, teamDetails, updateTeam };
