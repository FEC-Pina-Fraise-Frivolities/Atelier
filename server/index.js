require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
let controller = require('./controller');

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


// Set up our routes
// product
app.get('/products', controller.product.getProducts);
app.get('/products/:productId', controller.product.getProduct);
app.get('/products/:product_id/styles', controller.product.getProductStyle);
app.get('/products/:product_id/related', controller.product.getRelated);
//cart
app.get('/cart', controller.cart.get);
app.post('/cart', controller.cart.post);
//reviews
/**********/
app.get('./reviews', controller.reviews.getReviews);
app.get('./reviews/meta', controller.reviews.getReviewsMeta);

//questions
/***********/

//


/* ---------------- Server listens ---------------- */

app.listen(3000);
console.log(`Listening at http://localhost:3000`);