// week-9/page.js
"use client";
import { useState, useEffect } from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from './item-list';
import NewItem from './new-item';
import ItemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function ShoppingList() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(ItemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // got ai to help with this part
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(',')[0]
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{FE0F}\u{200D}\u{25AA}\u{FE0F}\u{2B06}\u{2194}\u{1F004}-\u{1F0CF}\u{2B50}]/gu, '')
      .trim();

    setSelectedItemName(cleanedItemName);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="p-4 bg-gray-950">
      <h1 className="text-4xl font-bold text-white">Shopping List</h1>
      <div className="flex space-x-8">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
