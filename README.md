# Atelier

## Getting Started

---

This section provides instructions on how to set up Atelier locally.
To get a local copy up and running follow these simple steps below.

### Prerequisites

Install npm and node.js in your local
* The command below will install both npm and node.js
  ```sh
  npm install -g npm
  ```

### Installation

_Below contains the instruction on how to download this repo and initalize in your local._

1. Get your github token. [see details instruction on github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token)
2. Clone the repo
   ```sh
   git clone https://github.com/FEC-Pina-Fraise-Frivolities/Atelier.git
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Create `.env` file in the root directory
5. Enter your github token in `.env`
   ```js
   AUTH = 'enter your github token'
   PORT = 3000
   ```

## Usage

---

The project Atelier creates a template for developers who are interested in developing a simple e-commerce site. You can easily switch ```endpoint``` in `server/controller` folder so that the website will fetch data in your desired API. See below for an example

```javascript
const axios = require('axios');

module.exports = {
  getProducts(req, res) {
    const endpoint = 'your API endpoint';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get products failed', err));
  },

  getProduct(req, res) {
    const { productId } = req.params;
    const endpoint = 'your API endpoint';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get product detail failed', err))
      .finally(console.log('req params: ', req.params));
  },

  getProductStyle(req, res) {
    const { productId } = req.params;
    const endpoint = 'your API endpoint';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get product style failed', err));
  },

  getRelated(req, res) {
    const { productId } = req.params;
    const endpoint = 'your API endpoint';
    const option = {
      method: 'GET',
      url: endpoint,
      headers: {
        Authorization: process.env.AUTH,
      },
    };
    axios(option)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.log('server: get related list failed', err));
  },
};
```