'use client';
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded bg-red-500 text-white disabled:opacity-50`}
        >
          -
        </button>
        <span className="text-2xl font-bold">{quantity}</span>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded bg-green-500 text-white disabled:opacity-50`}
        >
          +
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">Quantity must be between 1 and 20</p>
    </div>
  );
}
