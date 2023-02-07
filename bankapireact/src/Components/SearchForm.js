import { useEffect, useState } from "react";
import React from "react";

const SearchForm = (props) => {
  const [selectedValue, setData] = useState({
    dateInput: "",
    currInput: "Choose your currency",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setData((selectedValue) => ({
      ...selectedValue,
      [name]: value,
    }));
    
  };

  

  useEffect(()=> {
    props.addData(selectedValue)
    // eslint-disable-next-line
  }, [selectedValue])

  const currencyList = [
    "THB",
    "EUR",
    "USD",
    "AUD",
    "HKD",
    "CAD",
    "NZD",
    "SGD",
    "HUF",
    "CHF",
    "GBP",
    "JPY",
    "DKK",
    "CZK",
    "ISK",
    "NOK",
    "SEK",
    "RON",
    "TRY",
    "BGN",
    "ILS",
    "CLP",
    "PHP",
    "MXN",
    "ZAR",
    "BRL",
    "MYR",
    "IDR",
    "KRW",
    "CNY",
    "XDR",
  ];

  return (
    <form >
      <label for="currInput">Put the Currency Code</label>
      <select name="currInput" id="currInput" onChange={handleChange}>
        <option value="Choose your currency">Choose your currency </option>
        {currencyList.map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <label for="dateInput">Put your date</label>
      <input
        name="dateInput"
        type="date"
        placeholder="RRRR-MM-DD"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
