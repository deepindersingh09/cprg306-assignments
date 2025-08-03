'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">CPRG306-Assignments</h1>
      <ul className="list-disc ml-6 space-y-2">
        <li><Link href="/week-2" className="text-blue-500 underline">Go to Week 2</Link></li>
        <li><Link href="/week-3" className="text-blue-500 underline">Go to Week 3</Link></li>
        <li><Link href="/week-4" className="text-blue-500 underline">Go to Week 4</Link></li>
        <li><Link href="/week-5" className="text-blue-500 underline">Go to Week 5</Link></li>
        <li><Link href="/week-6" className="text-blue-500 underline">Go to Week 6</Link></li>
        <li><Link href="/week-7" className="text-blue-500 underline">Go to Week 7</Link></li>
        <li><Link href="/week-8" className="text-blue-500 underline">Go to Week 8</Link></li>
        <li><Link href="/week-9" className="text-blue-500 underline">Go to Week 9</Link></li>
        <li><Link href="/week-10" className="text-blue-500 underline">Go to Week 10</Link></li>
      </ul>
    </main>
  );
}
// This is the main page of the application, listing all weeks with links to their respective pages.
// Each link navigates to a different week of assignments in the course CPRG306.