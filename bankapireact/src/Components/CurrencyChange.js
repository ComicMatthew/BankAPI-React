import React, { useState } from "react";

const CurrencyChange = (props) => {
  const [inputAmount, setInputAmount] = useState(0.0);

  const changeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const result = (inputAmount * props.mid).toFixed(2);

  return (
    <div className="list-item-specific">
      <div className="name-container">
        <div className="new-search_control">
          <label for="Currency">Ile waluty chcesz wymienic? - {props.currency}:</label>
          <input
            name="Currency"
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="code-container">
        <h1>Wynik:</h1>
        <h2>{result} zl</h2>
      </div>
    </div>
  );
};

export default CurrencyChange;
