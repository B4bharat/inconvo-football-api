import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { createNewTeam, listAllTeams, fetchTeamDetails } from './controllers';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.post('/teams', async (req, res) => {
	const httpRequest = {
		body: req.body,
		query: req.query,
		params: req.params,
		ip: req.ip,
		method: req.method,
		path: req.path,
		headers: {
			'Content-Type': req.get('Content-Type'),
			Referer: req.get('referer'),
			'User-Agent': req.get('User-Agent'),
		},
	};

	const newTeam = await createNewTeam(httpRequest);

	res.type('json');
	res.send(newTeam);
});

app.get('/teams', async (req, res) => {
	const teamList = await listAllTeams();

	res.type('json');
	res.send(teamList);
});

app.get('/teams/:name', async (req, res) => {
	const { name } = req.params;
	const reqTeamDetails = await fetchTeamDetails(name);

	res.type('json');
	res.send(reqTeamDetails);
});

// listen for requests
app.listen(PORT, () => {
	console.log('Server is listening on port 3000');
});

export default app;
