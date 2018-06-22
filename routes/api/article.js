const axios = require('axios');
const router = require('express').Router();

const APIKey = 'af0bb210bd7c4cd9b78c653a91be9174';

const queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  APIKey + '&q=';

router.get('/call', (req, res) => {
	axios
		.get(queryURLBase + req.query.q)
		.then(results => res.json(results.data.response.docs))
		.catch(error => console.log(req.json(error)));
});

module.exports = router;