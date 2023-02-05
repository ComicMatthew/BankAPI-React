import { useState } from "react";
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

  const submitChange = (event) => {
    event.preventDefault();

    if (
      selectedValue.dateInput !== "" &&
      selectedValue.currInput !== "Choose your currency"
    ) {
      const table = "a";

      // let url1 = `http://api.nbp.pl/api/exchangerates/tables/${table}/${selectedValue.dateInput}/`;
      const url2 = `http://api.nbp.pl/api/exchangerates/rates/${table}/${selectedValue.currInput}/${selectedValue.dateInput}/`;

      fetch(url2)
        .then((response) => {
          if (response.ok) {
            // console.log(response)
            return response.json();
          } else {
            return Promise.reject(`Http error: ${response.status}`);
          }
        })
        .then((currencies) => {
          console.log(currencies);
          props.addDate(currencies);
        });
    }
  };

  const currencyList = [ "THB", "EUR", "USD", "AUD", "HKD", "CAD", "NZD",
    "SGD", "HUF", "CHF", "GBP", "JPY", "DKK", "CZK", "ISK", "NOK", "SEK", "RON", "TRY",
    "BGN", "ILS", "CLP", "PHP", "MXN", "ZAR", "BRL", "MYR", "IDR", "KRW", "CNY", "XDR",
  ];

  return (
    <form onSubmit={submitChange}>
      <label for="currInput">Put the Currency Code</label>

      <select name="currInput" id="currInput" onChange={handleChange}>
        <option value="Choose your currency">Choose your currency </option>
        {currencyList.map((element) => {
          return <option value={element}>{element}</option>;
        })}
      </select>

      <br></br>
      
      <label for="dateInput">Put your date</label>
      <input
        name="dateInput"
        type="date"
        placeholder="RRRR-MM-DD"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
