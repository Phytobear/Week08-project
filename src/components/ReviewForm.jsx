import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Review() {
  async function handleSubmit(formData) {
    "use server";

    const db = new pg.Pool({
      connectionString: process.env.DB_URL,
    });

    const { movie_title, review_content, image_url } =
      Object.fromEntries(formData);

    if (!movie_title || movie_title.trim() === "") {
      throw new Error("Movie title cannot be empty");
    }

    try {
      await db.query("BEGIN");

      // dose movie exists?
      const movieResult = await db.query(
        "SELECT id FROM movies WHERE title = $1",
        [movie_title]
      );

      let movieId;

      if (movieResult.rows.length === 0) {
        // If it dosnt make it
        const insertMovieResult = await db.query(
          "INSERT INTO movies (title, image_url) VALUES ($1, $2) RETURNING id",
          [movie_title, image_url || null]
        );
        movieId = insertMovieResult.rows[0].id;
      } else {
        // Movie exists? get its ID
        movieId = movieResult.rows[0].id;
      }

      // Insert review
      await db.query(
        "INSERT INTO reviews (movie_id, content) VALUES ($1, $2)",
        [movieId, review_content]
      );

      await db.query("COMMIT");

      // Revalidate?
      revalidatePath("/add-review");

      // Redirect to success page
      console.log("Redirecting to success page");
      redirect("/add-review/success-page");
    } catch (error) {
      await db.query("ROLLBACK");
      console.error("error during review submission:", error);

      if (error.message === "NEXT_REDIRECT") {
        throw error;
      }

      // Redirect to error page
      console.log("Redirecting to error page");
      redirect("/add-review/error-page");
    }
  }

  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <input name="movie_title" placeholder="movie title" required />
          <input
            name="review_content"
            placeholder="write your review here"
            required
          />
          <input name="image_url" placeholder="image url" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
