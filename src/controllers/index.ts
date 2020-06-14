import { createTeam, listTeams, teamDetails } from '../use-cases';

import makeCreateTeam from './create-team';
import makeListAllTeams from './list-teams';
import makeGetTeamDetails from './team-details';

const createNewTeam = makeCreateTeam({ createTeam });
const listAllTeams = makeListAllTeams({ listTeams });
const fetchTeamDetails = makeGetTeamDetails({ teamDetails });

const teamController = Object.freeze({
	createNewTeam,
	listAllTeams,
	fetchTeamDetails,
});

export default teamController;

export { createNewTeam, listAllTeams, fetchTeamDetails };
