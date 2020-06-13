import makeCreateTeam from './create-team';
import { readDataFile, writeToFile } from '../data-access';

const createTeam = makeCreateTeam({ readDataFile, writeToFile });

const teamService = Object.freeze({
	createTeam,
});

export default teamService;

export { createTeam };
