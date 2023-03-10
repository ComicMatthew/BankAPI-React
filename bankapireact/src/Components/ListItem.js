import React from "react";
import "../App.css";

const ListItem = ({ currency, code, mid, comparison, addFilter }) => {

  const imageSource = require(`../Pictures/${comparison.picture}.png`);

 const filterHandler = () => {
  addFilter(code);
 }

  return (
    <div className="list-item" onClick={filterHandler}>
      <div className="name-container">
        <h1>{currency}</h1>
        <img src={imageSource} alt={comparison.name}></img>
      </div>
      <div className="code-container">
        <h1>{code}</h1>
        <h2>{mid}</h2>
      </div>
    </div>
  );
};

export default ListItem;
