import { useEffect, useState } from "react";
import React from "react";
import getYesterday from "../functions/getYesterday";

const SearchForm = (props) => {
  const [selectedValue, setData] = useState({
    dateInput: "",
    yesterdayDateInput: "",
  });

  const [currencyInput, setCurrencyInput] = useState("Choose your currency");

  const handleDate = (event) => {
    setData((selectedValue) => ({
      ...selectedValue,
      dateInput: event.target.value,
      yesterdayDateInput: getYesterday(event.target.value),
    }));
  };

  const handleCurency = (event) => {
    setCurrencyInput(event.target.value);
    
  };
  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   setData((selectedValue) => ({
  //     ...selectedValue,
  //     [name]: value,

  //   }));

  // };

  useEffect(() => {
    props.addData(selectedValue, currencyInput); 
    // eslint-disable-next-line
  }, [selectedValue, currencyInput]);

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
    <form className="new-search">
      <div className="new-search_control">
        <label for="currInput">Wybierz walute</label>
        <select name="currInput" id="currInput" onChange={handleCurency} value = {props.code}>
          <option value="Choose your currency">Wszystkie waluty </option>
          {currencyList.map((element) => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
      <div className="new-search_control">
        <label for="dateInput">Wybierz date</label>
        <input
          name="dateInput"
          type="date"
          placeholder="RRRR-MM-DD"
          onChange={handleDate}
        />
      </div>
    </form>
  );
};

export default SearchForm;
