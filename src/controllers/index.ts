import { createTeam } from '../use-cases';

import makeCreateTeam from './create-team';

const createNewTeam = makeCreateTeam({ createTeam });

const teamController = Object.freeze({
	createNewTeam,
});

export default teamController;

export { createNewTeam };
