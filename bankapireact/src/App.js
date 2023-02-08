import "./App.css";
import React, { useEffect, useState } from "react";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

function App() {
  const [currencyData, setCurrencyData] = useState({
    currencyCode: "",
    date: "",
  });

  const [responseData, setResponseData] = useState({
    currenciesList: [],
    recievedDate: "",
  });

  const addDataHandler = (data) => {
    // console.log(data);
    setCurrencyData({
      ...currencyData,
      currencyCode: data.currInput,
      date: data.dateInput,
    });
  };

  useEffect(() => {
    const table = "a";

    const url1 = `http://api.nbp.pl/api/exchangerates/tables/${table}/${currencyData.date}/`;
    // const url2 = `http://api.nbp.pl/api/exchangerates/rates/${table}/${selectedValue.currInput}/${selectedValue.dateInput}/`;

    fetch(url1)
      .then((response) => {
        if (response.ok) {
          // console.log(response)
          return response.json();
        } else {
          return Promise.reject(`Http error: ${response.status}`);
        }
      })
      .then((currencies) => {
        // console.log(currencies);
        setResponseData({
          currenciesList: currencies[0].rates,
          recievedDate: currencies[0].effectiveDate,
        });
      });
  }, [currencyData.date]);

  return (
    <div className="App">
      <SearchForm addData={addDataHandler} />
      <Results
        items={responseData.currenciesList}
        date={responseData.recievedDate}
        code={currencyData.currencyCode}
      />
    </div>
  );
}

export default App;
