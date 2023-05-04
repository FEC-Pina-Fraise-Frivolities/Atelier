GET /products
[{
    id: Number,
    name: String,
    slogan: String,
    description: String,
    default_price: String
}, ...]


GET /products/:product_id
{
    id: Number,
    name: String,
    slogan: String,
    description: String,
    default_price: String
    features: [
        {
            feature: String,
            value: String
        }, ...]
}


GET /products/:product_id/styles
{
    "product_id": String,
    "results": [
      {
        "style_id": Number,
        "name": String,
        "original_price": String,
        "sale_price": String,
        "default?": Boolean,
        "photos": [
                      {
                "thumbnail_url": String,
                "url": String
            }, ...],
    "skus": {
          "37": {
                      "quantity": Number,
                      "size": String
          },
          "38": {
                      "quantity": Number,
                      "size": String
          }, ...}
    }, ...]
}


GET /products/:product_id/related
[Number, Number, Number, ...]