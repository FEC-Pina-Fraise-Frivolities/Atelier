const axios = require('axios');

module.exports = {
  getReviews(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get products failed', err));
  },

  getReviewsMeta(req, res) {
    const productId = req.params.product_id;
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${productId}`;
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
        console.log('result data in axios req: ', result.data);
      })
      .catch((err) => console.log('server: get products failed', err));

    console.log('request made: ');
  },

};
