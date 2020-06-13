export default function buildMakeTeam() {
	// TODO: Keep interfaces common somewhere
	interface TeamDetails {
		name: string;
		img: string;
	}

	return function makeTeam(teamDetails: TeamDetails) {
		console.log('team entity');
		console.log('teamDetails', teamDetails);

		function isAlphabeticName(name: string) {
			return /^[a-zA-Z\s&]+$/.test(name);
		}

		if (!isAlphabeticName(teamDetails.name)) {
			throw new Error('Name of the team should not be numeric');
		}

		function imgURLCheck(url: string) {
			return url.includes(
				'https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/'
			);
		}

		if (imgURLCheck(teamDetails.img) !== true) {
			throw new Error('Image does not contains the appropriate URL');
		}

		return Object.freeze({
			getTeamName: () => teamDetails.name,
			getImage: () => teamDetails.img,
			updateImage: (img: string) => {
				teamDetails.img = img;
			},
		});
	};
}
