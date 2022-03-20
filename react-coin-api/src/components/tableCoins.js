import React from 'react'
import CoinRow from './coinRows';

const title = ['#', 'Coin', 'Price', 'Price Change', '24h Volumen']

const TableCoins = ({coins}) => {
    return (
        <table className='table table-dark mt-4 table-hover'>
            <thead>
                <tr>
                    { 
                    title.map(title => (
                        <td>{title}</td>
                    ))
                    }
                    
                </tr>
            </thead>
            <tbody>
                {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;
