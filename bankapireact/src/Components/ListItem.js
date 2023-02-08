import React from "react";
import "../App.css";

const ListItem = ({ currency, code, mid, date }) => {
  return (
    <div className="list-item">
      <div className="code-container">
        <h1>{code}</h1>
        <h2>{mid}</h2>
      </div>
      <div className="name-container">
        <h1>{currency}</h1>
      </div>
    </div>
  );
};

export default ListItem;
