const SearchForm = () => {
  
  return (
    <form>
      <label for="dateInput">Put your date</label>
      <input name="dateInput" type="date" placeholder="RRRR-MM-DD" />

      <label for="currInput">Put the Currency Code</label>
      <select name="currInput" id="currInput">
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
    </form>
  );
};

export default SearchForm;
