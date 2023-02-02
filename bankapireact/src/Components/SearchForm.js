import { useState } from "react";
import React from "react";

const SearchForm = (props) => {

  const [selectedValue, setData] = useState({
    dateInput: "",
    currInput: "Choose your currency",
  });

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;

    setData((selectedValue) => ({
      ...selectedValue,
      [name]: value,
    }));
  }

  const submitChange = (event) => {
    event.preventDefault()
    
    if (selectedValue.dateInput !== '' && selectedValue.currInput !== "Choose your currency"){
    
    const table = "a";

    // let url1 = `http://api.nbp.pl/api/exchangerates/tables/${table}/${selectedValue.dateInput}/`;
    let url2 = `http://api.nbp.pl/api/exchangerates/rates/${table}/${selectedValue.currInput}/${selectedValue.dateInput}/`;
    
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
  };}

  return (
    <form onSubmit={submitChange}>
      <label for="currInput">Put the Currency Code</label>
      <select name="currInput" id="currInput"  onChange={handleChange}>
        <option value="Choose your currency">Choose your currency </option>
        <option value="THB">THB </option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="AUD">AUD</option>
        <option value="HKD">HKD</option>
        <option value="CAD">CAD</option>
        <option value="NZD">NZD</option>
        <option value="SGD">SGD </option>
        <option value="HUF">HUF</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="DKK">DKK</option>
        <option value="CZK">CZK</option>
        <option value="ISK">ISK </option>
        <option value="NOK">NOK</option>
        <option value="SEK">SEK</option>
        <option value="RON">RON</option>
        <option value="TRY">TRY</option>
        <option value="BGN">BGN</option>
        <option value="ILS">ILS</option>
        <option value="CLP">CLP </option>
        <option value="PHP">PHP</option>
        <option value="MXN">MXN</option>
        <option value="ZAR">ZAR</option>
        <option value="BRL">BRL</option>
        <option value="MYR">MYR</option>
        <option value="IDR">IDR</option>
        <option value="KRW">KRW</option>
        <option value="CNY">CNY</option>
        <option value="XDR">XDR</option>
      </select>
      <br></br>
      <label for="dateInput">Put your date</label>
      <input name="dateInput" type="date" placeholder="RRRR-MM-DD" onChange={handleChange}/>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default SearchForm;
