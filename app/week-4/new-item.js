// week-4/new-item.js
"use client";
import { useState } from 'react';

export default function NewItem () {
    const [quantity, setQuantity] = useState(1)
    const increment = () => setQuantity(prev => Math.min(prev + 1, 20)); //got help from ai with prev => math.min and math.max
    const decrement = () => setQuantity(prev => Math.max(prev - 1, 1));

    return(
        <main className="flex flex-col items-center justify-center min-h-screen">
            <div className='flex items-center space-x-10 bg-white p-4 rounded-md'>
            <p className='text-xl text-black'>{quantity}</p>
                <button 
                onClick={increment} 
                disabled={quantity === 20}
                className={`p-2 w-10 rounded-md ${quantity === 20 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'}`}>
                +
                </button>
                <button 
                onClick={decrement} 
                disabled={quantity === 1}
                className={`p-2 w-10 rounded-md ${quantity === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'}`}>
                -
                </button>
            </div>
        </main>
    )
}