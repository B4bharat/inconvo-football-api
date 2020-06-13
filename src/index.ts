import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { createNewTeam } from './controllers';

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

	const response = await createNewTeam(httpRequest);

	console.log('response', response);
	res.type('json');
	res.send('post');
});

// listen for requests
app.listen(PORT, () => {
	console.log('Server is listening on port 3000');
});

export default app;
