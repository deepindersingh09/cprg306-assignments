'use client';

import Item from './item';

export default function ItemList({ items }) {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className="space-y-2">
      {sortedItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
