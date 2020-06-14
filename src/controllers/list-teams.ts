export default function makeListAllTeams({ listTeams }) {
	return async function listAllTeams() {
		try {
			const teams = await listTeams();

			return {
				teams,
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
