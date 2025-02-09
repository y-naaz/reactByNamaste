import React from 'react'

export default function ResturantCards({ resData }) {
  return (
    <>
      {console.log(resData)}
      <div className="card" style={{ width: '13rem' }}>
        <img
          src="https://img.freepik.com/free-photo/stewed-white-beans-sliced-pumpkin-tomato-sauce_2829-19775.jpg?t=st=1735454814~exp=1735458414~hmac=3c094d7fba2d9c41e56bada4ec1ff63d14ab8920ca5c1ee844f5e5298c098acd&w=740"
          className="card-img-top"
          alt={resData.name}
        />
        <div className="card-body">
          <h5 className="card-title">{resData.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{resData.cuisine.join(", ")}</li>
          <li className="list-group-item">⭐ {resData.rating}</li>
          <li className="list-group-item">⏳ {resData.deliveryTime}</li>
        </ul>
      </div>
    </>
  );
}
