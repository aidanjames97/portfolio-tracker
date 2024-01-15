import { useState } from 'react';
import './notes.css';
import CreateNote from './notes/[id]/CreateNote';

// getting stock data from api database
async function getStock() {
    // fetching data 1 page, 30 items per page
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/myapp/records?page=1&perPage=30',
        {cache: 'no-store'}
    );
    const data = await res.json(); // convering result to json
    return data?.items as any[]// return items as array
}

function formatNumberWithCommas(number: { toLocaleString: () => any; }) {
    return number.toLocaleString();
}

// home page
export default async function HomePage() {
    const stock = await getStock(); // calling function to get stocks from api
    let marketValue = 0; // var to hold portfolio market value (add all holdings)
    let currentTotal = 0; // holds current price of holding to calculate P/L
    let pl = 0; // holds calculated p/l value
    let percentPL = 0; // holds calculated %p/l value

    // calculating the total portfolio value
    stock?.map((stock) => {
        let add = parseFloat(stock.buyPrice) * parseInt(stock.buyAmount);
        stock.marketValue = add;
        marketValue += add;

        let addC = parseFloat(stock.currentPrice) * parseInt(stock.buyAmount);
        currentTotal += addC;
    });

    pl = currentTotal - marketValue;
    percentPL = pl / marketValue;

    return(
        <div className='allStocks'>
            <div className='header'>
                <h1 className='title'>My Portfolio</h1>
                <span></span>
                <div className='eachColumn'>
                    <h4>Value:</h4>
                    <h2 className='numbers'>{marketValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
                </div>
                <span></span>
                <div className='eachColumn'>
                    <h4>Total $P/L:</h4>
                    <h2 className='numbers'>{pl.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
                </div>
                <span></span>
                <div className='eachColumn'>
                    <h4>Total %P/L:</h4>
                    <h2 className='numbers'>{percentPL.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2})}</h2>
                </div>
            </div>

            <div className='stockContainer'>
                <div className='headersInfo'>
                    <h5>Ticker</h5>
                    <h5>Buy Price</h5>
                    <h5>Buy Amount</h5>
                    <h5>Market Value</h5>
                    <h5>Current Price</h5>
                    <h5>P/L</h5>
                    <h5>% P/L</h5>
                </div>

                {stock?.map((stock) =>{
                    if (stock.title != "My Portfolio") {
                        let proloss = ((stock.currentPrice * stock.buyAmount) - stock.marketValue);
                        let percentProLoss = (proloss / (stock.buyPrice * stock.buyAmount));

                        stock.pl = proloss;
                        stock.percentPL = percentProLoss;

                        return (
                            // printing all stock data from database
                            <div className='stock'>
                                <h3>{stock.title}</h3>
                                <h5>{stock.buyPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                                <h5>{stock.buyAmount}</h5>
                                <h5>{stock.marketValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                                <h5>{stock.currentPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                                <h5>{stock.pl.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                                <h5>{stock.percentPL.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 })}</h5>
                            </div>
                        );
                    }
                })}
            </div>

            <CreateNote/>
            <button className='btn'>
                <img src='reload.png' alt='reload'></img>
            </button>
            <div className='footer'>
                <a href="https://www.flaticon.com/free-animated-icons/computer" title="computer animated icons">Computer animated icons created by Freepik - Flaticon</a>
            </div>
        </div>
    )
}