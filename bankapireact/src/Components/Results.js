import ListItem from "./ListItem";
import React from "react";
import "../App.css"

const Results = (props) => {
  const filteredList = props.items.filter((item) => {
    return item.code === props.code;
  });

  if (props.code === "Choose your currency") {
    return (
      <div className="result-list">
        <h1>Displayed values from: {props.date}</h1>
        {props.items.map((item) => (
          <ListItem
            key={item.code}
            currency={item.currency}
            code={item.code}
            mid={item.mid}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="result-list">
      <h1>Displayed values from: {props.date}</h1>
      {filteredList.map((item) => (
        <ListItem
          key={item.code}
          currency={item.currency}
          code={item.code}
          mid={item.mid}
        />
      ))}
    </div>
  );
};

export default Results;
