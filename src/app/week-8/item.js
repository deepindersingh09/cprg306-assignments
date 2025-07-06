'use client';

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border p-2 rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect && onSelect(name)}
    >
      <strong>{name}</strong> — {quantity} ({category})
    </li>
  );
}
