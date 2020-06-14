import makeTeam from '../../entities/team';
import { TeamDetails } from '../../entities/team';

// Here we will moderate the team details, if anything is invalid, it should go away from here itself
export default function makeCreateTeam({ writeToFile }) {
	return async function makeNewTeam(teamDetails: TeamDetails) {
		// ensures that the details comply by the business logic
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
