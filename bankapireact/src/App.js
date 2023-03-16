import "./App.css";
import React, { useEffect, useState } from "react";
import SearchForm from "./Components/SearchForm";
import Results from "./Components/Results";
//import getYesterday from "./functions/getYesterday";

function App() {
  const [currencyData, setCurrencyData] = useState({
    currencyCode: "",
    date: "",
    yesterday: "",
  });

  const [responseData, setResponseData] = useState({
    currenciesList: [],
    currenciesListYesterday: [],
    recievedDate: "",
  });

  const addDataHandler = (date, currency) => {
    // console.log(data);
    setCurrencyData({
      ...currencyData,
      currencyCode: currency,
      date: date.dateInput,
      yesterday: date.yesterdayDateInput,
    });
  };

  useEffect(() => {
    const inputDate = currencyData.date;
    const yesterdayToInputDate = currencyData.yesterday;

    const table = "a";

    //const url1 = `http://api.nbp.pl/api/exchangerates/tables/${table}/${inputDate}/`;
    const url2 = `http://api.nbp.pl/api/exchangerates/tables/${table}/${yesterdayToInputDate}/${inputDate}`;

    fetch(url2)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Http error: ${response.status}`);
        }
      })
      .then((currencies) => {
        console.log(currencies);
        setResponseData({
          currenciesList: currencies[1].rates,
          recievedDate: currencies[1].effectiveDate,
          currenciesListYesterday: currencies[0].rates,
        });
      });
  }, [currencyData.date, currencyData.yesterday]);

  const addFilterCode = (element) => {
    if (currencyData.currencyCode === element) {
      setCurrencyData({
        ...currencyData,
        currencyCode: "Choose your currency",
      });
    } else {
      setCurrencyData({
        ...currencyData,
        currencyCode: element,
      });
    }
  };

  return (
    <div className="App">
      <SearchForm addData={addDataHandler} 
      code = {currencyData.currencyCode}/>
      <Results
        items={responseData.currenciesList}
        yesterdayItems={responseData.currenciesListYesterday}
        date={responseData.recievedDate}
        code={currencyData.currencyCode}
        addFilterCodee={addFilterCode}
      />
    </div>
  );
}

export default App;
