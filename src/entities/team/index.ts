// All the thirdparty and custom dependencies to go here and to be passed as dependency injection to the entity
// This allows us to seggregate the business logic from the dependencies
import buildMakeTeam from './team';

const makeTeam = buildMakeTeam();

export default makeTeam;

interface TeamDetails {
	name: string;
	img: string;
}

export { TeamDetails };
