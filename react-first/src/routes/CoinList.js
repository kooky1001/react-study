import {useEffect, useState} from "react";

function CoinList() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(res => res.json())
            .then(data => {
                setCoins(data);
                setLoading(false);
            });
    }, []);
    console.log(coins);
    return (
        <div>
            <h1>Coin List</h1>
            <h3>총 {coins.length}개</h3>
            {loading ? <p>Loading...</p> :
                <table border="1">
                    <thead>
                    <tr>
                        <th>rank</th>
                        <th>name</th>
                        <th>symbol</th>
                        <th>USD</th>
                    </tr>
                    </thead>
                    <tbody>
                    {coins.map((coin) => (
                        <tr>
                            <td>{coin.rank}</td>
                            <td>{coin.name}</td>
                            <td>{coin.symbol}</td>
                            <td>{coin.quotes['USD'].price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default CoinList;
