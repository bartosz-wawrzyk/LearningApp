const express = require('express')
const jsonParser = require('body-parser').json()
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const app = express()
const port = 3000
const databaseFilename = 'database.json'

function loadDatabase() {
	try{
		return JSON.parse(fs.readFileSync(databaseFilename))
	} catch (e) {
		return []
	}
}

function addToDatabase(credentials) {
	let currentDatabase = loadDatabase()
	currentDatabase.push(credentials);
	fs.writeFileSync(databaseFilename, JSON.stringify(currentDatabase));
}

function isInDatabase(username){
	return loadDatabase().some(entry => entry.username === username)
}

function authenticate(credentials) {
	return loadDatabase().some(entry => 
		entry.username === credentials.username 
		&& entry.password === credentials.password
	)
}

app.get('/login', (req, res) => {
	let credentials = {
		username: req.query.username,
		password: req.query.password
	}

	let isAuthenticated = authenticate(credentials);

	res.send(isAuthenticated)
})

app.post('/register', jsonParser, (req, res) => {
	if(!!req.body.username && req.body.password) {
		if(isInDatabase(req.body.username)) res.status(400).send("Username is taken!")
		let newCredentials = {
			id: uuidv4(),
			username: req.body.username,
			password: req.body.password
		}
		addToDatabase(newCredentials);
		res.send(newCredentials);
	} else res.sendStatus(400);
})

app.listen(port, () => {
	console.log(`Backend listening on port ${port}`)
})