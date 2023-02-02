import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <h1>{props.currency}</h1>
      <h2>{props.code}</h2>
      <h3>{props.mid}</h3>
      <h3>{props.date}</h3>
    </li>
  );
};

export default ListItem;
