import { React, useState, useEffect } from 'react';
import axios from 'axios';

function CompareHelper({ obj }) {
  // return <div>{Object.keys(obj)}</div>;
  const featureArr = [];
  const { length } = Object.keys(obj);
  for (let i = 0; i < length; i += 1) {
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
      featureArr[i].push(' ');
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
      featureArr[i].push(' ');
    }
  }

  return (
    featureArr.map((arr) => (
      <tbody key={arr[0]}>
        <tr className="featureLine">
          <td>{arr[1]}</td>
          <td>{arr[0]}</td>
          <td>{arr[2]}</td>
        </tr>
      </tbody>
    ))
  );
}
function ComparisonView({ productId, nextId, setCompare }) {
  console.log(productId, nextId);
  const obj = {};
  const [featureObj, setFeatureObj] = useState({});
  const [nameArr, setNameArr] = useState([]);
  useEffect(() => {
    const name = [];
    axios.get(`/products/${productId}`)
      .then((res) => {
        const result = res.data;
        console.log('produt id', result.name);
        name.push(result.name);
        result.features.forEach((objFeature) => {
          const featureName = objFeature.feature;
          obj[featureName] = { currentProduct: objFeature.value };
        });
      })
      .catch((err) => console.log('server: get products failed', err))
      .then(() => {
        axios.get(`/products/${nextId}`)
          .then((res) => {
            const result = res.data;
            name.push(result.name);
            setNameArr(name);
            console.log(name);
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

    <div className="compareTable" onClick={() => { setCompare(false); }}>
      {ifRender && (
        <div className="compareTable">
          <table className="compareTableHelper">
            <th className="tableTitle">Compare</th>
            <tbody>
              <tr className="productName">
                <td><strong>{nameArr[0]}</strong></td>
                <td>{' '}</td>
                <td><strong>{nameArr[1]}</strong></td>
              </tr>
            </tbody>
            <CompareHelper obj={featureObj} />
          </table>
        </div>
      )}
    </div>

  );
}
export default ComparisonView;
