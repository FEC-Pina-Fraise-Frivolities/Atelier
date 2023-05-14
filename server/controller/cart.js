const axios = require('axios');

module.exports = {
  getCart(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/card/';
    const option = {
      method: 'Get',
      url: endpoint,
      headers: {
        Authorization: process.env.AUT,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get cart failed', err));
  },
  addToCart(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/card/';
    const option = {
      method: 'POST',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
      params: {
        sku_id: req.params.skuId,
      },
    };
    axios(option)
      .then((result) => {
        res.sent(result.data);
      })
      .catch((err) => console.log('server: add to cart failed', err));
  },
};
