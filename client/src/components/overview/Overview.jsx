import React, { useEffect, useState } from 'react';

// AR = 1*a+2*b+3*c+4*d+5*e/(R)
// Average rating formula where
// a = # of 1 star ratings
// b = # of 2 star ratings
// c = # of 3 star ratings
// d = # of 4 star ratings
// e = # of 5 star ratings
// and R = total number of ratings

function Overview({ productId, setProductId }) {
  const [productData, setProductData] = useState({});
  const [productEntries, setProductEntries] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/products/${productId}`;
    console.log('url:', url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProductData(result);
        setProductEntries(Object.entries(result));
      })
      .catch((err) => {
        console.log('get product data failed', err);
      });
  }, []);

  return (
    <div>
      Product Data:
      <div />
      <div className="productData">
        {productEntries.map((entry) => (
          <div className="entry" key={entry}>
            {' '}
            {`${entry[0]}: ${entry[1]}`}
            {' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
