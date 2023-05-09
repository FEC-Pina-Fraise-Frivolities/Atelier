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
      .catch((err) => {
        console.log(err);
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
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  getReviewsMeta(req, res) {
    const productId = req.params.product_id;
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`;
    const option = {
      method: 'GET',
      url: endpoint,
      params: { product_id: req.query.product_id },
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    return axios(option)
      .then((result) => {
        res.send(result.data);
        console.log('result data in axios req: ', result.data);
      })
      .catch((err) => console.log('server: get products failed', err));

    console.log('request made: ');
  },

};
