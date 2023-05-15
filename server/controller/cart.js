const axios = require('axios');

module.exports = {
  getCart(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart/';
    const option = {
      method: 'Get',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get cart failed', err));
  },
  // addToCart(req, res) {
  //   const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart';
  //   console.log('endpoint: ', endpoint);
  //   console.log('BODY!!! ', req.body);
  //   const option = {
  //     method: 'POST',
  //     url: endpoint,
  //     headers: {
  //       Authorization: process.env.AUTH,
  //       'Content-Type': 'application/json',
  //     },
  //     body: req.body,
  //   };
  //   axios(option)
  //     .then((result) => {
  //       console.log('server: add to cart endpoint: ', endpoint);
  //       res.send(result.data);
  //     })
  //     .then(() => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log('server: add to cart failed', err));
  // },
  addToCart(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart/';
    const option = {
      method: 'POST',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
      data: req.body,
    };
    axios(option)
      .then((result) => {
        res.status(201).send(result.data);
      })
      .catch((err) => console.log('server: add to cart failed', err));
  },
};
