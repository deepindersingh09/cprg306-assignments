'use client';

import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Deepinder Singh</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/deepindersingh09/cprg306-assignments.git" target="_blank">
          View Repository
        </Link>
      </p>
    </div>
  );
}
