export default function makeGetTeamDetails({ teamDetails }) {
	return async function getTeamDetails(name: string) {
		try {
			console.log('getTeamDetails controller');

			const reqTeamDetails = await teamDetails(name);

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
