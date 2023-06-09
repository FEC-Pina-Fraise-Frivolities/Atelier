const axios = require('axios');

module.exports = {
  getProducts(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/';
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

  getProduct(req, res) {
    const { productId } = req.params;
    const endpoint = ` https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`;
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
      .catch((err) => console.log('server: get product detail failed', err))
      .finally(console.log('req params: ', req.params));
  },

  getProductStyle(req, res) {
    const { productId } = req.params;
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`;
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
      .catch((err) => console.log('server: get product style failed', err));
  },

  getRelated(req, res) {
    const { productId } = req.params;
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`;
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
      .catch((err) => console.log('server: get related list failed', err));
  },
};
