const express = require('express');

const app = express();

app.use('/mui/music', express.static('./music/build'));
app.use('/mui/welcome', express.static('./welcome/dist'));
app.use('/', express.static('./bootstrap/dist'));

app.listen(
	3001,
	() => console.log('Web Server running at: http://localhost:3001'),
	console.log('Welcome Micro UI running at: http://localhost:3001/hello'),
	console.log('Music Micro UI running at: http://localhost:3001/play')
);
