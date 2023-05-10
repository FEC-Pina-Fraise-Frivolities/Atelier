const axios = require('axios');


module.exports = {
  getProducts: function (req, res) {
    let endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/';
    let option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: config.TOKEN
      },
    };
    axios(option)
      .then(result => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get products failed', err));
  },


  getProduct: function(req, res) {
    let productId = req.params.product_id;
    let endpoint = ` https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}`;
    let option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: config.TOKEN
      },
    };
    axios(option)
      .then(result => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get product detail failed', err));
  },


  getProductStyle: function(req, res) {
    let productId = req.params.product_id;
    let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/styles`;
    let option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: config.TOKEN
      },
    };
    axios(option)
      .then(result => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get product style failed', err));
  },

  getRelated: function (req, res) {
    let productId = req.params.product_id;
    let endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`;
    let option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: config.TOKEN
      },
    };
    axios(option)
      .then(result => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get related list failed', err));
  }
};