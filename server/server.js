if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const defaultRoute = require('./routes/default');

mongoose.connect(process.env.DB_MONGO);
mongoose.connection
	.once('open', () => {
		console.log('DB connected');
	})
	.on('error', (err) => {
		console.log(err);
	});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', defaultRoute);

app.listen(3000, () => {
	console.log('Running on port 3000');
});
