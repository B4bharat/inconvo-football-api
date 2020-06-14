import makeTeam from '../team';

// Here we will moderate the team details, if anything is invalid, it should go away from here itself
export default function makeCreateTeam({ writeToFile }) {
	interface TeamDetails {
		name: string;
		img: string;
	}

	return async function makeNewTeam(teamDetails: TeamDetails) {
		console.log('you came in the create area');
		// Add new team to the list
		const newTeamDetails = makeTeam(teamDetails);

		// This ensures that the teamDetails are only pushed after they are validated
		// through business logic and not directly
		const fileWriteResponse = await writeToFile({
			name: newTeamDetails.getTeamName(),
			img: newTeamDetails.getImage(),
		});

		return fileWriteResponse;
	};
}
