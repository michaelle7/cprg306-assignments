// week-7/page.js
// attemped minimal instruction challenge. quit half way (got confused with the import statement and code just started breaking)
"use client";
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import ItemsData from './items.json';

export default function Week7Page() {
  const [items, setItems] = useState(ItemsData)
  
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  
    return (
    <main className="p-4 bg-gray-950">
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items}/>
    </main>
  );
}
