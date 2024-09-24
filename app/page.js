import Link from "next/link";

export default function Home() {

  return (
    <main>
      <h1 className="text-3x1">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2">Week-2 Page</Link>
      <br />
      <Link href="./week-3">Week-3 Page</Link>
      <h2>Course Example Links</h2> 
    </main>
  );
}
