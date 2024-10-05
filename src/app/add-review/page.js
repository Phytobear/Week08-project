import pg from pg
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default function Review() {

    async function handleSubmit(formData) {

        "use server"

        const db = new pg.Pool({
            connectionString: process.env.DB_URL
        })

        const { movie_title, review_content } = Object.fromEntries(formData);

  try {
    await db.query('BEGIN');

    // dose movie exists?------------------------------------------------------------------------------------------------------------------------------------------------------------
    const movieResult = await db.query(

      'SELECT id FROM movies WHERE title = $1',
      [movie_title]
    );

    let movieId;

    // If it dosnt make it-----------------------------------------------------------------------------------------------------------------------------------------------------------
    if (movieResult.rows.length === 0) {

      const insertMovieResult = await db.query(

        'INSERT INTO movies (title) VALUES ($1) RETURNING id',
        [movie_title]

      );
      movieId = insertMovieResult.rows[0].id;
    } else {

      movieId = movieResult.rows[0].id;
    }

    // insert review-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    await db.query(
      'INSERT INTO reviews (movie_id, content) VALUES ($1, $2)',
      [movieId, review_content]
    );

    await db.query('COMMIT');
    revalidatePath('/add-review');

    // Redirect to succsess page-----------------------------------------------------------------------------------------------------------------------------------------------------
    redirect('/add-review/success');
  } catch (error) {

    await db.query('ROLLBACK');
console.error('error adding review:', error);

    // Redirecting to error page-----------------------------------------------------------------------------------------------------------------------------------------------------
    redirect('/add-review/error');
  } finally {

    await db.end();
  }
}

return (
    <div>
    <form action={handleSubmit}>
<div>
<input name='movie_title'  placeholder="title"></input> 
  </div>  
    <div>
              <div>

    </div>
    </div>
    </form>
    </div>
)
}

