import makeTeam from '../team';

// TODO: DB Dependency to be built later, imgURLCheck
// Here we will moderate the team details, if anything is invalid, it should go away from here itself
export default function makeCreateTeam({ writeToFile }) {
	/**
   * makeNewTeam factory function
      Dependency injection ( DB, ‘image url check’)
      DB.insert should merely push a new value to the json store
   */

	interface TeamDetails {
		name: string;
		img: string;
	}
	console.log('makeCreateTeam');

	return async function makeNewTeam(teamDetails: TeamDetails) {
		console.log('makeNewTeam usecase');
		const newTeamDetails = makeTeam(teamDetails);

		console.log('newTeamDetails', newTeamDetails);

		// TODO: Push 'newTeamDetails' to the json file
		const fileWriteResponse = await writeToFile(teamDetails);

		console.log('fileWriteResponse', fileWriteResponse);
	};
}
