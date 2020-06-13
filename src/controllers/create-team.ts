export default function makeCreateNewTeam({ createTeam }) {
	return async function createNewTeam(httpRequest) {
		try {
			console.log('createNewTeam controller');
			const teamDetails = httpRequest.body;

			await createTeam(teamDetails);

			return {
				teamDetails,
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
