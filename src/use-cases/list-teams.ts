export default function makeListTeams({ readDataFile }) {
	return async function listTeams() {
		const teamList = await readDataFile();
		const teamListJSON = JSON.parse(teamList);

		return teamListJSON;
	};
}
