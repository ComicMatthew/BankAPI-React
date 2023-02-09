import ListItem from "./ListItem";
import CurrencyChange from "./CurrencyChange";
import React from "react";
import "../App.css";

const Results = (props) => {
  

  const filteredList = props.items.filter((item) => {
    return item.code === props.code;
  });

  if (props.code === "Choose your currency") {
    return (
      <div className="result-list">
        <h1>Dane pochadza z dnia: {props.date}</h1>
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
    <div className="result-list-short">
      <h1>Dane pochadza z dnia: {props.date}</h1>
      {filteredList.map((item) => (
        <ListItem
          key={item.code}
          currency={item.currency}
          code={item.code}
          mid={item.mid}
        />
      ))}
      {filteredList.map((item) => (
        <CurrencyChange 
          mid={item.mid}
          code={item.code}
          currency={item.currency}
        />
      ))}
      
    </div>
  );
};

export default Results;
