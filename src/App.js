import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/tableCoins';

function App() {
  
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d")
    console.log(res.data)
    setCoins(res.data)
  }

  useEffect(() => {
    getData ()
  }, [])

  return (
    <div className="container">
      <h1>MAXi Coins</h1>
      <div className='row'>
      <input type='text' placeholder='Buscar Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={ e => setSearch(e.target.value)} />
      <TableCoins coins={coins}  search={search} />
      </div>
    </div>
  );
}

export default App;
