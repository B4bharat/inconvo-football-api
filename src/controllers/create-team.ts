export default function makeCreateNewTeam({ createTeam }) {
	return async function createNewTeam(httpRequest) {
		try {
			console.log('createNewTeam controller');
			const posted = await createTeam(httpRequest.body);

			console.log('posted', posted);

			return {
				headers: {
					'Content-Type': 'application/json',
				},
				statusCode: 201,
				body: { posted },
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
