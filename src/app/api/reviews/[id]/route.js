import { Pool } from "pg";

export async function DELETE(req, { params }) {
  const pool = new Pool({
    connectionString: process.env.DB_URL,
  });

  const { id } = params;

  try {
    const deleteQuery = "DELETE FROM reviews WHERE id = $1";
    await pool.query(deleteQuery, [id]);

    return new Response("Review deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return new Response("Failed to delete review", { status: 500 });
  }
}
