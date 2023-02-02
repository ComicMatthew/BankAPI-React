import ListItem from "./ListItem";
// import React, {useState} from "react";

const Results = (props) => {

  
  

  return (
    <ul>
      {/* {props.items.map((item) => ( */}
        <ListItem
          key={props.items.code}
          currency={props.items.currency}
          code={props.items.code}
          mid={props.items.mid}
          date={props.items.date}
        />
      {/* ))} */}
    </ul>
  );
};

export default Results;
