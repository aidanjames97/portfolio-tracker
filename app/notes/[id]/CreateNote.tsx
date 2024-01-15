'use client';
import './create.css';
import { useState } from "react";

export default function CreateNote() {
    const [ticker, setTicker] = useState('');
    const [buyAmount, setBuyAmount] = useState('');
    const [buyPrice, setBuyPrice] = useState('');

    const create = async() => {
        if (ticker == '' || buyAmount == '' || buyPrice == '') {
            // incorrect input, do not add, show alert
            alert("Please complete all fields before submitting!");
        } else {
            // allowed to add to database
            await fetch('http://127.0.0.1:8090/api/collections/myapp/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ticker,
                    buyPrice,
                    buyAmount,
                }),
            });
        }
    }

    return (
        <form onSubmit={create} className='entireForm'>
            <h3>Add new holding:</h3>
            <input 
                className='inpBox'
                type="text"
                placeholder="Ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
            />
            <input 
                className='inpBox'
                placeholder="Buy Price"
                value={buyPrice}
                onChange={(e) => setBuyPrice(e.target.value)}
            />
            <input 
                className='inpBox'
                placeholder="Buy Amount"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
            />
            <button className='subButton' type="submit">
                +
            </button>
        </form>
    );
}