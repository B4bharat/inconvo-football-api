import makeTeam from '../team';

// TODO: DB Dependency to be built later, imgURLCheck
// Here we will moderate the team details, if anything is invalid, it should go away from here itself
export default function makeCreateTeam({ readDataFile, writeToFile }) {
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
			/**
			 * - If team already exists, grab the image.
			 * - update the number in the image by one.
			 * - write it back to the file
			 */
			const existingTeam = teamListJSON.data.find(teamExists);
			const existingTeamImageName = existingTeam.img
				.slice(existingTeam.img.lastIndexOf('/') + 1) // eslint-disable-line
				.split('.')[0]; // eslint-disable-line

			const updatedImageName = updateImageName(
				existingTeamImageName,
				existingTeam.img
			);

			console.log('updatedImageName', updatedImageName);

			existingTeam.img = updatedImageName;
		} else {
			console.log('makeNewTeam usecase');
			const newTeamDetails = makeTeam(teamDetails);

			console.log('newTeamDetails', newTeamDetails);

			// TODO: Push 'newTeamDetails' to the json file
			const fileWriteResponse = await writeToFile(teamDetails);

			console.log('fileWriteResponse', fileWriteResponse);
		}
	};
}
