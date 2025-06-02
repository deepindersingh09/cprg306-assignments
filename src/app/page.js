import Link from 'next/link';
import StudentInfo from './week-2/student-info';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li><Link href="/week-2" className="text-red-500 underline">Go to Week 2</Link></li>
        <li><Link href="/week-3" className="text-blue-500 underline">Go to Week 3</Link></li>
      </ul>
      <StudentInfo />
    </main>
  );
}
