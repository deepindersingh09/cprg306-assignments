'use client';

export default function Item({ name, quantity, category }) {
  return (
    <li className="mb-2">
      <strong>{name}</strong> - {quantity} ({category})
    </li>
  );
}
