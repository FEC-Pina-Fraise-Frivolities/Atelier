const axios = require('axios');

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
        res.status(200).send(result.data);
      })
      .catch(() => {
        console.log('Fail to send GET request for reviews');
        res.status(400).send();
      });
  },

  getReviewsMeta(req, res) {
    console.log(req.query);
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    return axios(option)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch(() => {
        console.log('Fail to send GET request for metadata');
        res.status(400).send();
      });
  },

  addReview(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews';
    const option = {
      method: 'POST',
      url: endpoint,
      headers: {
        Authorization: process.env.TOKEN,
      },
      data: req.body,
    };
    return axios(option)
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  markHelpful(req, res) {
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${req.body.review_id}/helpful`;
    const option = {
      method: 'PUT',
      url: endpoint,
      headers: {
        Authorization: process.env.TOKEN,
      },
    };
    return axios(option)
      .then(() => {
        res.status(200).send('Successfully updated the review');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

};
