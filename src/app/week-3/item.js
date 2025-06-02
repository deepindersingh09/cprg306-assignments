export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-4 rounded-md shadow bg-white">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
    </li>
  );
}
