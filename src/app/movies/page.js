import { connect } from "@/utilities/connect";
import Image from "next/image";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";

export default async function Movies({ searchParams, params }) {
  const db = connect();

  const moviesQuery = `
  SELECT movies.*, 
  COUNT(reviews.id) AS review_count FROM movies 
  LEFT JOIN reviews ON reviews.movie_id = movies.id 
  GROUP BY movies.id
`;
  const movies = (await db.query(moviesQuery)).rows;

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

      {sorted.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          reviewCount={movie.review_count}
        />
      ))}
    </div>
  );
}
