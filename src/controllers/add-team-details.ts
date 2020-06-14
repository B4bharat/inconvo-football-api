import { readDataFile } from '../data-access';
import { TeamDetails } from '../entities/team';

export default function makeAddTeamDetails({ createTeam, updateTeam }) {
	return async function addTeamDetails(reqBody) {
		try {
			const teamList = await readDataFile();
			const teamListJSON = JSON.parse(teamList);

			const teamDetails = reqBody;

			if (
				teamListJSON.data.find(
					(team: TeamDetails) => team.name === teamDetails.name
				)
			) {
				// updateTeam
				const updatedTeamDetails = await updateTeam(teamDetails);

				return updatedTeamDetails;
			} else {
				// createTeam
				await createTeam(teamDetails);

				return {
					teamDetails,
				};
			}
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
