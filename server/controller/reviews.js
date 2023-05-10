const axios = require('axios');


module.exports = {
  getReviews: function(req, res) {
    let endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/';
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

  getReviewsMeta: function(req, res) {
    let endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta';
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


  }

};