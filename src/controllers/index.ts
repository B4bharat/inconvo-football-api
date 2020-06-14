import { createTeam, listTeams } from '../use-cases';

import makeCreateTeam from './create-team';
import makeListAllTeams from './list-teams';

const createNewTeam = makeCreateTeam({ createTeam });
const listAllTeams = makeListAllTeams({ listTeams });

const teamController = Object.freeze({
	createNewTeam,
	listAllTeams,
});

export default teamController;

export { createNewTeam, listAllTeams };
