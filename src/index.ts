import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { addTeamDetails, listAllTeams, fetchTeamDetails } from './controllers';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(helmet());

app.post('/teams', async (req, res) => {
	const newTeam = await addTeamDetails(req.body);

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
