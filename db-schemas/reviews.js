GET /reviews
{
  "product": String,
  "page": Number,
  "count": Number,
  "results": [
    {
      "review_id": Number,
      "rating": Number,
      "summary": String,
      "recommend": Boolean,
      "response": String || null,
      "body": String,
      "date": String,
      "reviewer_name": String,
      "helpfulness": Number,
      "photos": [{
          "id": Number,
          "url": String
        },
        {
          "id": Number,
          "url": String
        }, ...]
    }, ...]
}

GET /reviews/meta
{
  "product_id": Number,
  "ratings": {
    2: Number,
    3: Number,
    4: Number,
    // ...
  },
  "recommended": { //what are these keys representing?
    0: Number
    // ...
  },
  "characteristics": {
    "Size": {
      "id": Number,  //what is this id used for?
      "value": String
    },
    "Width": {
      "id": Number,
      "value": String
    },
    "Comfort": {
      "id": Number,
      "value": String
    },
    // ...
  }
}

POST /reviews
{
  product_id: Number,
  rating: Number,
  summary: String, //short parsed of body text
  body: String,  //full review
  recommended: Boolean,
  name: String,
  email: String,
  photos: [String, String, ...]
  characteristics: [Num: Num, Num: Num, ...]
}

PUT /reviews/:review_id/helpful
+1 to "helpfulness"

PUT /reviews/:review_id/report
//blocks review from returning on GET, blackbox logics? Don't know what key it updates.