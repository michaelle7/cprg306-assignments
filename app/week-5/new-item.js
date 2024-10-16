// week-5/new-item.js
"use client";
import { useState } from 'react';

export default function NewItem () {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");
    const [quantity, setQuantity] = useState(1)
    const increment = () => setQuantity(prev => Math.min(prev + 1, 20)); //got help from ai with prev => math.min and math.max
    const decrement = () => setQuantity(prev => Math.max(prev - 1, 1));
    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {name, quantity, category};
        console.log(item);
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return(
        <main className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className='space-y-4 bg-gray-800 p-4 rounded-md'>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Item name" 
                    className="p-2 border rounded-md w-full text-black"
                />
                
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

                <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded-md w-full text-black">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>

                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md w-full">
                    Add
                </button>
            </form>
        </main>
    )
}