GET /qa/questions
{
  "product_id": String,
  "results": [{
        "question_id": Number,
        "question_body": String,
        "question_date": String,
        "asker_name": String,
        "question_helpfulness": Number,
        "reported": Boolean,
        "answers": {
          68: {
            "id": Number,
            "body": String,
            "date": String
            "answerer_name": String,
            "helpfulness": Number,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": Number,
        "question_body": String,
        "question_date": String,
        "asker_name": String,
        "question_helpfulness": Number,
        "reported": Boolean,
        "answers": {
          70: {
            "id": Number,
            "body": String,
            "date": String,
            "answerer_name": String,
            "helpfulness": Number,
            "photos": [],
          },
          78: {
            "id": Number,
            "body": String,
            "date": String,
            "answerer_name": String,
            "helpfulness": Number,
            "photos": [],
          }
        }
      },
      // ...
  ]
}