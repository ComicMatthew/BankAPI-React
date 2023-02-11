import React from "react";
import "../App.css";

const ListItem = ({ currency, code, mid, comparison }) => {


  return (
    <div className="list-item">
      <div className="name-container">
        <h1>{currency}</h1>
        <h2>{comparison}</h2>
      </div>
      <div className="code-container">
        <h1>{code}</h1>
        <h2>{mid}</h2>
      </div>
    </div>
  );
};

export default ListItem;
