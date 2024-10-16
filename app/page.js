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
      <p><Link href="/week-3" className="underline hover:text-green-300">Week 3 Assignment</Link></p>
      <p><Link href="/week-4" className="underline hover:text-green-300">Week 4 Assignment</Link></p>
      <p><Link href="/week-5" className="underline hover:text-green-300">Week 5 Assignment</Link></p>
      <p><Link href="/week-6" className="underline hover:text-green-300">Week 6 Assignment</Link></p>
      <p><Link href="/week-7" className="underline hover:text-green-300">Week 7 Assignment</Link></p>
      <p><Link href="/week-8" className="underline hover:text-green-300">Week 8 Assignment</Link></p>
      <p><Link href="/week-9" className="underline hover:text-green-300">Week 9 Assignment</Link></p>
      <p><Link href="/week-10" className="underline hover:text-green-300">Week 10 Assignment</Link></p>
      <p><Link href="/week-11" className="underline hover:text-green-300">Week 11 Assignment</Link></p>
      <p><Link href="/week-12" className="underline hover:text-green-300">Week 12 Assignment</Link></p>
      <p><Link href="/week-13" className="underline hover:text-green-300">Week 13 Assignment</Link></p>
      <p><Link href="/week-14" className="underline hover:text-green-300">Week 14 Assignment</Link></p>
      <p><Link href="/week-15" className="underline hover:text-green-300">Week 15 Assignment</Link></p>
    </main>
  );
}
