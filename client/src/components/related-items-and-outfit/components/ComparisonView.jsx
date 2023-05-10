import { React, useState, useEffect } from 'react';
import axios from 'axios';

function CompareHelper({ obj }) {
  // return <div>{Object.keys(obj)}</div>;
  const featureArr = [];
  const { length } = Object.keys(obj);
  for (let i = 0; i < length; i++) {
    const feature = Object.keys(obj)[i];
    featureArr.push([feature]);
    if (obj[feature].currentProduct !== undefined) {
      let singal = obj[feature].currentProduct;
      if (singal === true) {
        singal = '√';
      } else
      if (singal === null) {
        singal = 'x';
      }
      featureArr[i].push(singal);
    } else {
      featureArr[i].push('not mentioned');
    }
    if (obj[feature].comparedId !== undefined) {
      let singal = obj[feature].comparedId;
      if (singal === true) {
        singal = '√';
      } else
      if (singal === null) {
        singal = 'x';
      }
      featureArr[i].push(singal);
    } else {
      featureArr[i].push('not mentioned');
    }
  }
  console.log(featureArr);

  return (
    featureArr.map((arr) => (
      <tbody key={arr[0]}>
        <tr>
          <td>{arr[1]}</td>
          <td>{arr[0]}</td>
          <td>{arr[2]}</td>
        </tr>
      </tbody>
    ))
  );
}
function ComparisonView({ productId, nextId }) {
  const obj = {};
  const [featureObj, setFeatureObj] = useState({});
  useEffect(() => {
    let endpoint = `http://localhost:3000/products/${productId}`;
    let option = {
      method: 'GET',
      url: endpoint,
    };
    axios(option)
      .then((res) => {
        const result = res.data;
        result.features.forEach((objFeature) => {
          const featureName = objFeature.feature;
          obj[featureName] = { currentProduct: objFeature.value };
        });
      })
      .catch((err) => console.log('server: get products failed', err))
      .then(() => {
        endpoint = `http://localhost:3000/products/${nextId}`;
        option = {
          method: 'GET',
          url: endpoint,
        };
        axios(option)
          .then((res) => {
            const result = res.data;
            result.features.forEach((objFeature) => {
              const featureName = objFeature.feature;
              if (obj[featureName] === undefined) {
                obj[featureName] = { comparedId: objFeature.value };
              } else {
                obj[featureName].comparedId = objFeature.value;
              }
            });
            setFeatureObj(obj);
          })
          .catch((err) => console.log('server: get products failed', err));
      });
  }, []);
  const ifRender = Object.keys(featureObj).length > 0;
  return (
    <div className="compareTable">
      <p className="sub-title" id="comapre">compareView</p>
      {ifRender && <table><CompareHelper obj={featureObj} /></table>}
    </div>
  );
}
export default ComparisonView;
