"use client"

import React, { useState } from 'react'

type counterTypes = {
    message: string;
    count: number;
}

export default function Counter({ message, count }: counterTypes) {

    let [counts, setCounts] = useState(count);

    let [userName, setUserName] = useState("");
    let [value, setValue] = useState(0);

    const addition = () => {
        setCounts(counts + (+value))
    }
    const subtraction = () => {
        if (counts >= value) {
            setCounts(counts - (+value))
        }
    }

    let userNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-md w-80'>
                <h1 className='text-center text-xl font-semibold text-gray-700'>{`${message} ${userName}`}</h1>
                <input
                    type="text"
                    value={userName}
                    onChange={userNameHandler}
                    className='border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-3 py-2 mt-4 w-full'
                    placeholder='Enter your name'
                />
                <input
                    type="number"
                    placeholder='Add Value'
                    onChange={e => setValue(Number(e.target.value))}
                    className='border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-3 py-2 mt-2 w-full'
                />
                <p className='text-center text-lg font-medium text-gray-700 mt-4'>{counts}</p>
                <div className='flex justify-around mt-4'>
                    <button onClick={addition} className='border px-5 py-2 rounded-3xl bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'>Add</button>
                    <button onClick={subtraction} className='border px-5 py-2 rounded-3xl bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'>Subtract</button>
                </div>
            </div>
        </div>
    )
}
