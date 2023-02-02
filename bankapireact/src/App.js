import "./App.css";
import React, {useState} from "react";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";

// const DUMMY_ARRAY = [
//   { currency: "bat (Tajlandia)", code: "THB", mid: 0.1322 },
//   { currency: "dolar amerykański", code: "USD", mid: 4.3258 },
//   { currency: "dolar australijski", code: "AUD", mid: 3.0616 },
// ];



function App() {

  let [currencyData, setCurrencyData] = useState({
    currency: '',
    code: '',
    mid: '',
    date: ''
  })

  const addDateHandler = (data) => {
    console.log(data)
    setCurrencyData({
      currency: data.currency,
      code: data.code,
      mid: data.rates[0].mid,
      date: data.rates[0].effectiveDate

    })
  }

  return (
    <div className="App">
      <SearchForm addDate = {addDateHandler} />
      <Results items={currencyData} />
    </div>
  );
}

export default App;
