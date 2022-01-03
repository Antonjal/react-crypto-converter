import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

function Converter() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [selectedPrimaryCurrency, setSelectedPrimaryCurrency] = useState("BTC");
  const [selectedSecondaryCurrency, setSelectedSecondaryCurrency] =
    useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: "BTC",
    secondaryCurrency: "BTC",
    exchangeRate: 0,
  });
  const [result, setResult] = useState(0);

  const convert = () => {
    var options = {
      method: "GET",
      url: "https://crypto-converter-backend.onrender.com/convert",
      params: {
        from_currency: selectedPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: selectedSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setResult(response.data * amount);

        setExchangedData({
          primaryCurrency: selectedPrimaryCurrency,
          secondaryCurrency: selectedSecondaryCurrency,
          exchangeRate: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="converter">
      <h2>Cryptocurrency Converter</h2>
      <div className="input__box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={selectedPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setSelectedPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  name="currency-amount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={selectedSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setSelectedSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>

      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
}

export default Converter;
