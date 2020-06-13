import makeTeam from '../team';

// TODO: DB Dependency to be built later, imgURLCheck
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
	console.log('makeCreateTeam');

	return async function makeNewTeam(teamDetails: TeamDetails) {
		const teamList = await readDataFile();
		const teamListJSON = JSON.parse(teamList);

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

		if (teamListJSON.data.find(teamExists)) {
			const existingTeam = teamListJSON.data.find(teamExists);
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
			console.log('makeNewTeam usecase');
			const newTeamDetails = makeTeam(teamDetails);

			console.log('newTeamDetails', newTeamDetails);

			// TODO: Push 'newTeamDetails' to the json file
			const fileWriteResponse = await writeToFile(teamDetails);

			return fileWriteResponse;
		}
	};
}
