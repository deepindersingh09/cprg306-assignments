import NewItem from './new-item';

export default function Page() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Add a New Item</h1>
      <NewItem />
    </main>
  );
}
