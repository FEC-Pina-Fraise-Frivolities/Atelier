const axios = require('axios');

module.exports = {
  getQuestions(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.TOLKEN,
      },
      params: req.query,
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

}