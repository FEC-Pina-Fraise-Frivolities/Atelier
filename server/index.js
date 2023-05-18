/* eslint-disable no-console */
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const controller = require('./controller');
const logger = require('./middleware/logger');

// Serves up all static and generated assets in ../client/dist.

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware
app.use(morgan('tiny'));
app.use(cors());

// Add a middleware to log HTTP requests
app.use(logger);

// Set up our routes

// product
app.get('/products', controller.product.getProducts);
app.get('/products/:productId', controller.product.getProduct);
app.get('/products/:productId/styles', controller.product.getProductStyle);
app.get('/products/:productId/related', controller.product.getRelated);
// cart
app.get('/cart', controller.cart.getCart);
app.post('/cart', controller.cart.addToCart);
// reviews
/** ******* */
app.get('/reviews', controller.reviews.getReviews);
app.get('/reviews/meta', controller.reviews.getReviewsMeta);
app.post('/reviews', controller.reviews.addReview);
app.put('/reviews/helpful', controller.reviews.markHelpful);

// questions
/** ******** */
app.get('/qa/questions', controller.questions.getQuestions);
app.post('/qa/questions', controller.questions.addQuestion);
app.post('/qa/questions/:question_id/answers', controller.questions.addAnswer);
app.put('/qa/questions/:question_id/helpful', controller.questions.markHelpfulQuestion);
app.put('/qa/answers/:answer_id/helpful', controller.questions.markHelpfulAnswer);
app.put('/qa/answers/:answer_id/report', controller.questions.reportAnswer);
//

/* ---------------- Server listens ---------------- */

app.listen(process.env.PORT || 3000);
console.log(`Listening at http://localhost:${process.env.PORT || 3000}`);
