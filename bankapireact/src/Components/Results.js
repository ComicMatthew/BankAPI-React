import ListItem from "./ListItem";
import CurrencyChange from "./CurrencyChange";
import React from "react";
import "../App.css";
import checkDiferenceInArray from "../functions/checkDiferenceInArray"

const Results = (props) => {

// comparison list

  const comparisonArray = props.items.map(
    (item, index) => item.mid - props.yesterdayItems[index].mid
  );

  // eslint-disable-next-line
  const comparedOutput = checkDiferenceInArray(comparisonArray)
  

  //Filtered lists - to long. Want a new concept
  const filteredList = props.items.filter((item) => {
    return item.code === props.code;
  });

  const filteredListYesterday = props.yesterdayItems.filter((item) => {
    return item.code === props.code
  })

  const comparisonFilteredList = filteredList.map((item, index) => item.mid - filteredListYesterday[index].mid)

  
  const comparedFilteredOutput = checkDiferenceInArray(comparisonFilteredList)


  if (props.code === "Choose your currency") {
    return (
      <div className="result-list">
        <h1>Dane pochadza z dnia: {props.date}</h1>
        {props.items.map((item, index) => (
          <ListItem
            key={item.code}
            currency={item.currency}
            code={item.code}
            mid={item.mid}
            comparison={comparedOutput[index]}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="result-list-short">
      <h1>Dane pochadza z dnia: {props.date}</h1>
      {filteredList.map((item, index) => (
        <ListItem
          key={item.code}
          currency={item.currency}
          code={item.code}
          mid={item.mid}
          comparison={comparedFilteredOutput[index]}
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
