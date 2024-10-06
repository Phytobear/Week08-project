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
        <Link href="/movies?sortBy=asc">Sort by asc</Link>
        <Link href="/movies?sortBy=desc">Sort by desc</Link>
        <Link href="/movies">Remove sort</Link>
      </div>

      {movies.map((movie) => (
        <div
          key={movie.id}
          className="relative group p-4 border border-gray-200 rounded-lg"
        >
          <h3 className="font-bold text-lg mb-2">{movie.title}</h3>

          {/* display image_url or placeholder */}
          <Image
            src={movie.image_url || "https://via.placeholder.com/150"}
            alt={movie.title}
            width={150}
            height={200}
            className="rounded"
          />

          <div className="mt-2">
            <Link href={`/movies/${movie.id}`}>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Go to Reviews
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
