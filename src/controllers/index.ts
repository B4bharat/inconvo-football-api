import {
	createTeam,
	updateTeam,
	listTeams,
	teamDetails,
} from '../use-cases/team';

import makeAddTeamDetails from './add-team-details';
import makeListAllTeams from './list-teams';
import makeGetTeamDetails from './team-details';

const addTeamDetails = makeAddTeamDetails({ createTeam, updateTeam });
const listAllTeams = makeListAllTeams({ listTeams });
const fetchTeamDetails = makeGetTeamDetails({ teamDetails });

const teamController = Object.freeze({
	addTeamDetails,
	listAllTeams,
	fetchTeamDetails,
});

export default teamController;

export { addTeamDetails, listAllTeams, fetchTeamDetails };
