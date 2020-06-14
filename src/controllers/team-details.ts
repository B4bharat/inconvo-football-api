export default function makeGetTeamDetails({ teamDetails }) {
	return async function getTeamDetails(name: string) {
		try {
			const reqTeamDetails = await teamDetails(name);

			if (!reqTeamDetails) {
				throw new Error(`The Requested team - ${name} does not exists`);
			}

			return {
				reqTeamDetails,
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
