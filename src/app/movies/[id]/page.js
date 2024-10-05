import { Pool } from "pg";
import ReviewsList from "@/components/ReviewsList";

export default async function MoviePage({ params }) {
  const pool = new Pool({
    connectionString: process.env.DB_URL,
  });

  const { id } = params;

  // Query to fetch movie details
  const moviesQuery = "SELECT * FROM movies WHERE id = $1";
  const moviesResult = await pool.query(moviesQuery, [id]);

  // Query to fetch reviews related to movie
  const reviewQuery = "SELECT * FROM reviews WHERE movie_id = $1";
  const reviewResult = await pool.query(reviewQuery, [id]);

  // Check movie
  if (moviesResult.rows.length === 0 || !moviesResult.rows[0]) {
    return <div>Movie not found</div>;
  }

  const movie = moviesResult.rows[0];
  const reviews = reviewResult.rows;

  return (
    <div>
      <h1>{movie.title}</h1>

      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
