import { connect } from "@/utilities/connect";
import Image from "next/image";
import Link from "next/link";

export default async function Movies({ searchParams, params }) {
  const db = connect();

  const movies = (await db.query(`SELECT * FROM movies`)).rows;

  //?why is this declared but never used? ----------------------------------------------------------------------------------------------------------------------------
  const sorted = movies.sort((a, b) => {
    if (searchParams.sortBy === "asc") {
      return a.title.localeCompare(b.title);
    } else if (searchParams.sortBy === "desc") {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <div>
        {/* //TODO Make these buttons ------------------------------------------------------------------------------------------------------------------------------*/}
        <Link href="/movies?sortBy=asc">Sort by asc</Link>
        <Link href="/movies?sortBy=desc">Sort by desc</Link>
        <Link href="/movies">Remove sort</Link>
      </div>

      {movies.map((movies) => (
        <div key={movies.id} className="relative group">
          <div>
            <Link href={`/movies/${movies.id}`}>{movies.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
