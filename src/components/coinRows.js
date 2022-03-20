import React from "react"

const CoinRow = ({coin, index}) => {
    console.log(coin, index)
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '5%'} } className='img-fluid me-4' />
                <spam>{coin.name} </spam>
                <spam className= 'ms-3 text-muted text-uppercase'>{coin.symbol} </spam>
                
            </td>
            <td>{coin.current_price} </td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger' } >
                {coin.price_change_percentage_24h} </td>
            <td>{coin.total_volume} </td>
        </tr>
    )
}
export default CoinRow