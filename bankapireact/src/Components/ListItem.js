import React from "react";

const ListItem = ({currency, code, mid, date}) => {
  return (
    <div>
      <h1>{currency}</h1>
      <h2>{code}</h2>
      <h3>{mid}</h3>
      <h3>{date}</h3>
    </div>
  );
};

export default ListItem;
