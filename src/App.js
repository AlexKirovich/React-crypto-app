import Coin from "./components/Coin";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false%27"
      )
      .then((res) => {
        setCoins(res.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="coin-search">
        <form action="">
          <input
            value={search}
            onChange={onChange}
            className="search-bar"
            placeholder="Search for coin..."
            type="text"
          />
        </form>
      </div>
      {coins
        .filter((coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase())
        ).map((e) => (
          <Coin
            key={e.id}
            img={e.image}
            coin={e.name}
            rs={e.current_price}
            percent={e.price_change_percentage_24h}
            mcap={e.market_cap}
          />
        ))}
    </div>
  );
}

export default App;
