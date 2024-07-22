"use client"

import React, { useState, useRef } from 'react';

type CounterTypes = {
    message: string;
    count: number;
};

export default function Counter({ message, count }: CounterTypes) {
    const [counts, setCounts] = useState(count);
    const [userName, setUserName] = useState("");
    const [value, setValue] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(message);

    const inputRef = useRef<HTMLInputElement>(null);

    const addition = () => {
        setCounts(counts + value);
    };
    
    const subtraction = () => {
        if (counts >= value) {
            setCounts(counts - value);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleButtonClick = () => {
        setDisplayMessage(`Hello ${userName}`);
        setUserName(""); 
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-md w-80'>
                <h1 className='text-center text-xl font-semibold text-gray-700'>{displayMessage}</h1>
                <div className='relative mt-4'>
                    <input
                        type="text"
                        value={userName}
                        onChange={handleInputChange}
                        className='border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-3 py-2 w-full pr-12'
                        placeholder='Enter your name'
                    />
                    <button 
                        onClick={handleButtonClick} 
                        className='absolute right-0 top-0 h-full border-l px-3 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </button>
                </div>
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
    );
}
