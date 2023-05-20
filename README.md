<a name="readme-top"></a>

<div align="center" >
  <a href="https://github.com/FEC-Pina-Fraise-Frivolities/Atelier">
    <img src="images/logo.png" alt="Logo" width="80" height="80" style="border-radius: 50%">
  </a>
</div>
<!-- TABLE OF CONTENTS -->

<details>

  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#product-overview">Product Overview</a></li>
        <li><a href="#related-items-and-outfit">Related Items and Outfit</a></li>
        <li><a href="#questions-and-answers">Questions and Answers</a></li>
        <li><a href="#ratings-and-reviews">Ratings and Reviews</a></li>
      </ul>
    </li>
   <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

# Pineapple Fields
<!-- ABOUT THE PROJECT -->
## About The Project

Hello, and welcome to your next e-commerce destination! This is a project developed by the Pina Fraise Frivolities Team to implement an e-commerce front-end that will give Amazon a run for it's money! The key features of this project include:

#### Product Overview
[![Product Name Screen Shot][product-overview-screenshot]](https://github.com/FEC-Pina-Fraise-Frivolities/Atelier/)

This component lists all of the information about your hot product. It features:

* A gallery with thumbnails and an expanded view for users to zoom in
* A style selector that allows the customer to select from various product styles
* Product category, name, and price that dynamically re-render on style selection
* Product description and features

#### Related Items and Outfit
[![Related Items Screen Shot][related-items-screenshot]](https://github.com/FEC-Pina-Fraise-Frivolities/Atelier/)

This component lists the related items and the outfit items. It features:

* Several photos of each product in the list
* Navigate to other product by clicking the name in the card
* Show the comparison table of current product and the product on the card
* Edit the items in the outfit list

#### Questions and Answers
[![Questions and Answers Screen Shot][qs-and-as-screenshot]](https://github.com/FEC-Pina-Fraise-Frivolities/Atelier/)

The Q&A module conditionally displays questions and answers for products selected by previous modules. It features:

* A debounced search bar that displays results on input
* Modal forms with validation for submitting questions and answers with image uploads
* Network optimized functions that displays more Q&As without additional backend API calls.

#### Ratings and Reviews
[![Ratings and Reviews Screen Shot][ratings-and-reviews-screenshot]](https://github.com/FEC-Pina-Fraise-Frivolities/Atelier/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![Express.js][Express.js]][Express.js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

---

This section provides instructions on how to set up Pineapple Fields locally.
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
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

---

The project Pineapple Fields creates a template for developers who are interested in developing a simple e-commerce site. You can easily switch ```endpoint``` in `server/controller` folder so that the website will fetch data in your desired API. See below for an example

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
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing
Welcomes contributions to our projects on Github. All types of contributions are encouraged and valued. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The we look forward to your contributions.

 And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
- Star the project
- Tweet about it
- Refer this project in your project's readme
- Mention the project at local meetups and tell your friends/colleagues

I Want To Contribute
> Legal Notice:
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.


Issues
> Feel free to submit issues and enhancement requests.


Step By Step
>Please refer to our project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.
- Fork the repo on GitHub
- Clone the project to your own machine
- Commit changes to your own branch
- Push your work back up to your fork
- Submit a Pull request so that we can review your changes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Add top navigation bar
- [ ] Refactor to adhere to Airbnb's .eslintrc
- [ ] Unify CSS styling
- [ ] Dark Mode
- [ ] Optimize to >80 performance score per Google Page Speed
  - [ ] Reduce unused JS
  - [ ] Minify CSS
  - [ ] Minify JS
  - [ ] Enable Text Compression

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Authors

*  Maximus Chen [github.com/HeyMaximus](https://github.com/HeyMaximus)
*  Ruojia Liu [github.com/rul008](https://github.com/rul008)
*  Milad Moulayi [github.com/MiladMoulayi](https://github.com/MiladMoulayi)
*  Jay Zhang [github.com/gocodezhang](https://github.com/gocodezhang)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-overview-screenshot]: ./images/screenshot_ov.png
[related-items-screenshot]: ./images/screenshot_ri.png
[qs-and-as-screenshot]: ./images/screenshot_qa.png
[ratings-and-reviews-screenshot]: ./images/screenshot_rr.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/