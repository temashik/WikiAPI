const { json } = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router');
const consolidate = require('consolidate');

app.use(json());
app.engine('html', consolidate.ejs);
app.set('views', __dirname + '/views')
app.set('view engine', 'html');
app.use('/', router);

app.listen(8000, () => {
	console.log('Listening on port 8000');
});
