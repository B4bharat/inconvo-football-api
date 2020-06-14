export default function makeListTeams({ readDataFile }) {
	return async function listTeams() {
		let teamList = await readDataFile();

		teamList = JSON.parse(teamList);

		return teamList;
	};
}
