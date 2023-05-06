const axios = require('axios');
require('dotenv').config();

module.exports = {
  getReviews(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.TOKEN,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get products failed', err));
  },

  getReviewsMeta(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.TOKEN,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get products failed', err));
  },

};
