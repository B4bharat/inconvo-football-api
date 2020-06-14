import makeTeam from '../team';

// Here we will moderate the team details, if anything is invalid, it should go away from here itself
export default function makeCreateTeam({
	readDataFile,
	writeToFile,
	updateExisting,
}) {
	interface TeamDetails {
		name: string;
		img: string;
	}

	return async function makeNewTeam(teamDetails: TeamDetails) {
		let teamList = await readDataFile();

		teamList = JSON.parse(teamList);

		function teamExists(team: TeamDetails) {
			return team.name === teamDetails.name;
		}

		function updateImageName(existingImgName: string, existingImgURL: string) {
			const updatedName = (parseInt(existingImgName) + 1).toString(); // eslint-disable-line
			const updatedImgURL = existingImgURL.replace(
				existingImgName,
				updatedName
			);

			return updatedImgURL;
		}

		if (teamList.data.find(teamExists)) {
			// Update team Details [image]
			const existingTeam = teamList.data.find(teamExists);
			const existingTeamImageName = existingTeam.img
				.slice(existingTeam.img.lastIndexOf('/') + 1) // eslint-disable-line
				.split('.')[0]; // eslint-disable-line

			const updatedImageName = updateImageName(
				existingTeamImageName,
				existingTeam.img
			);

			existingTeam.img = updatedImageName;

			const updateResponse = await updateExisting(existingTeam);

			return updateResponse;
		} else {
			// Add new team to the list
			const newTeamDetails = makeTeam(teamDetails);

			// This ensures that the teamDetails are only pushed after they are validated
			// through business logic and not directly
			const fileWriteResponse = await writeToFile({
				name: newTeamDetails.getTeamName(),
				img: newTeamDetails.getImage(),
			});

			return fileWriteResponse;
		}
	};
}
