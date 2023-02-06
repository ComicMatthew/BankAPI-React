import "./App.css";
import React, { useState } from "react";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

// const DUMMY_ARRAY = [
//   { currency: "bat (Tajlandia)", code: "THB", mid: 0.1322 },
//   { currency: "dolar amerykański", code: "USD", mid: 4.3258 },
//   { currency: "dolar australijski", code: "AUD", mid: 3.0616 },
// ];

function App() {
  const [currencyData, setCurrencyData] = useState({
    currencyList: [],
    date: "",
  });

  const [currencyCode, setCurrencyCode] = useState("");

  const addCurrencyHandler = (currencyCode) => {
    console.log(currencyCode);
    setCurrencyCode(currencyCode);
  };

  const addDateHandler = (data) => {
    console.log(data);
    setCurrencyData({
      currencyList: data[0].rates,
      date: data[0].effectiveDate,
    });
  };

  return (
    <div className="App">
      <SearchForm addDate={addDateHandler} addCurrency={addCurrencyHandler} />
      <Results
        items={currencyData.currencyList}
        date={currencyData.date}
        code={currencyCode}
      />
    </div>
  );
}

export default App;
