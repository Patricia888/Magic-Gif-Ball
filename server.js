'use strict';

const express = require('express');
// const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.POST;
// const CLIENT_URL = process.env.CLIENT_URL;
const TOKEN = process.env.TOKEN;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(express.static('./public'));

// app.use(cors());

// app.get('/', (req, res) => res.send('This is a test'));

app.get('/', (req, res) => res.sendFile('index.html', {root:'./public'})

app.get('*', (req, res) => res.sendFile('index.html', {root:'./public'})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));