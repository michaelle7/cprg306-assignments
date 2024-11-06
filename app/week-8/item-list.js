// week-8/item-list.js
"use client";
import { useState } from 'react';
import Item from './item';

  export default function ItemList( { items, onItemSelect } ) {
    const [sortBy, setSortBy] = useState('name')
    const sortItem = [...items].sort((names, categories) => {
        if (sortBy === 'name'){
            return names.name.localeCompare(categories.name)
        } else if (sortBy === 'category'){
            return names.category.localeCompare(categories.category)
        }
    });

    return (
      <div>
        <div className="mb-4 space-x-4">
            <span className="text-white">Sort by:</span>
            <button onClick={() => setSortBy('name')} className={`p-2 w-40 ${sortBy === 'name' ? 'bg-orange-400' : 'bg-orange-700'}`}>Name (alphabetical)</button>
            <button onClick={() => setSortBy('category')} className={`p-2 w-40 ${sortBy === 'category' ? 'bg-orange-400' : 'bg-orange-700'}`}>Category (alphabetical)</button>
            <ul>
                {sortItem.map(item => (
                    <Item 
                        key={item.id}
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
      </div>
    );
  }