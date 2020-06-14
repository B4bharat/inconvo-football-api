import { TeamDetails } from '../../entities/team';

export default function makeTeamDetails({ readDataFile }) {
	return async function teamDetails(teamName: string) {
		let teamList = await readDataFile();

		teamList = JSON.parse(teamList);

		const teamDetails = teamList.data.find(
			(teamData: TeamDetails) => teamData.name === teamName
		);

		return teamDetails;
	};
}
