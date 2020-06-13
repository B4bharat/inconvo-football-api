export default function buildMakeTeam() {
	// TODO: Keep interfaces common somewhere
	interface TeamDetails {
		name: string;
		img: string;
	}

	return function makeTeam(teamDetails: TeamDetails) {
		console.log('team entity');
		console.log('teamDetails', teamDetails);
		if (/^[a-zA-Z\s&]+$/.test(teamDetails.name) !== true) {
			throw new Error('Name of the team should not be numeric');
		}

		// if (imageRegex(teamDetails.img)) {

		// }

		return Object.freeze({
			getTeamName: () => teamDetails.name,
			getImage: () => teamDetails.img,
			updateImage: (img: string) => {
				teamDetails.img = img;
			},
		});
	};
}
