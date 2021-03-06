import makeTeam from '../../entities/team';
import { TeamDetails } from '../../entities/team';

export default function makeUpdateTeam({ readDataFile, updateExisting }) {
	return async function updateTeam(teamDetails: TeamDetails) {
		let teamList = await readDataFile();

		teamList = JSON.parse(teamList);

		function teamExists(team: TeamDetails) {
			return team.name === teamDetails.name;
		}
		const existingTeam = teamList.data.find(teamExists);
		const existingTeamImageName = existingTeam.img
			.slice(existingTeam.img.lastIndexOf('/') + 1) // eslint-disable-line
			.split('.')[0]; // eslint-disable-line

		function updateImageName(existingImgName: string, existingImgURL: string) {
			const updatedName = (parseInt(existingImgName) + 1).toString(); // eslint-disable-line
			const updatedImgURL = existingImgURL.replace(
				existingImgName,
				updatedName
			);

			return updatedImgURL;
		}

		const updatedImageName = updateImageName(
			existingTeamImageName,
			existingTeam.img
		);

		existingTeam.img = updatedImageName;

		const updatedImageDetails = makeTeam(existingTeam);

		await updateExisting({
			name: updatedImageDetails.getTeamName(),
			img: updatedImageDetails.getImage(),
		});

		return {
			name: updatedImageDetails.getTeamName(),
			img: updatedImageDetails.getImage(),
		};
	};
}
