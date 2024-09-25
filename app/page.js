// app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p>
        <Link href="/week-2" className="underline hover:text-green-300">Week 2 Assignment</Link>
      </p>
    </main>
  );
}
