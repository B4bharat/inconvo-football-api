import makeCreateTeam from './create-team';
import { writeToFile } from '../data-access';

const createTeam = makeCreateTeam({ writeToFile });

const teamService = Object.freeze({
	createTeam,
});

export default teamService;

export { createTeam };
