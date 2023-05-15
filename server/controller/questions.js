const axios = require('axios');

module.exports = {
  getQuestions(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
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

  addQuestion(req, res) {
    const endpoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions';
    const option = {
      method: 'POST',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
      data: req.body,
    };
    return axios(option)
      .then((result) => {
        res.status(200).end('Question Added');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  addAnswer(req, res) {
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.body.question_id}/answers`;
    console.log(req.body.body)
    const option = {
      method: 'POST',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
      data: req.body.body,
    }
    return axios(option)
      .then((result) => {
        res.status(200).end('Answer Added');
      })
      .catch((err) => {
        console.log('this is server err:', err);
        res.status(400).send();
      });
  },

  markHelpfulQuestion(req, res) {
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.body.question_id}/helpful`;
    const option = {
      method: 'PUT',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    }
    return axios(option)
      .then((result) => {
        res.status(200).end('Marked Helpful');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  markHelpfulAnswer(req, res) {
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.body.answer_id}/helpful`;
    const option = {
      method: 'PUT',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    }
    return axios(option)
      .then((result) => {
        res.status(200).end('Answer Helpful');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },

  reportAnswer(req, res) {
    const endpoint = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.body.answer_id}/report`;
    const option = {
      method: 'PUT',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    }
    return axios(option)
      .then((result) => {
        res.status(200).end('Answer reported');
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  },
}