'use client';

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleaned = itemName
      .split(',')[0]               // remove extra info after comma
      .replace(/[^a-zA-Z ]/g, '')  // remove emojis, numbers, punctuation
      .trim()
      .toLowerCase();

    setSelectedItemName(cleaned);
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Shopping List</h1>
      <div className="flex gap-6">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
