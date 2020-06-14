import { TeamDetails } from './index';

export default function buildMakeTeam() {
	return function makeTeam(teamDetails: TeamDetails) {
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
