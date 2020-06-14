import { readDataFile } from '../data-access';
import { TeamDetails } from '../entities/team';

export default function makeAddTeamDetails({ createTeam, updateTeam }) {
	return async function addTeamDetails(httpRequest) {
		try {
			const teamList = await readDataFile();
			const teamListJSON = JSON.parse(teamList);

			const teamDetails = httpRequest.body;

			if (
				teamListJSON.data.find(
					(team: TeamDetails) => team.name === teamDetails.name
				)
			) {
				// updateTeam
				await updateTeam(teamDetails);
			} else {
				// createTeam
				await createTeam(teamDetails);
			}

			return {
				teamDetails,
			};
		} catch (e) {
			// TODO: Error logging
			console.log(e);

			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 400,
				body: {
					error: e.message,
				},
			};
		}
	};
}
