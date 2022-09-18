const { default: axios } = require('axios');
const e = require('express');
const express = require('express');
const router = express.Router();
const url = require('url');

const link = 'https://en.wikipedia.org/w/api.php?';
const params = {
	'origin': '*',
	'format': 'json',
	'action': 'query',
	'prop': 'extracts',
	'exchars': 250,
	'exintro': true,
	'explaintext': true,
	'generator': 'search',
	'gsrlimit': 20
};

router.get('/', (req, res) => {
	res.render('startpage.ejs');
});
router.get('/search', async (req, res) => {
	const searchQuery = url.parse(req.url, true).query.searchQuery
	if (searchQuery) {
		params.gsrsearch = searchQuery;
		const { data } = await axios.get(link, { params });
		const result = data.query.pages;
		res.render('search-result.ejs', { data: result });
	}
	else {
		res.send('No search input');
	}
});

module.exports = router;