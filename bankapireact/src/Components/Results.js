import ListItem from "./ListItem";
import React from "react";

const Results = (props) => {
  
  const filteredList = props.items.filter((item) => {
    return item.code === props.code;
  });

  if (props.code === "Choose your currency") {
    return (
      <div>
        <p>{props.date}</p>
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
    <div>
      <p>{props.date}</p>
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
