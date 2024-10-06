import MovieImage from "@/components/MovieImage";
import Link from "next/link";

export default function MovieCard({ movie, reviewCount }) {
  return (
    <div className="relative group p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center">
      <h3 className="font-bold text-lg mb-2">{movie.title}</h3>

      {/* Use MovieImage component */}
      <MovieImage imageUrl={movie.image_url} title={movie.title} />

      {/* review count */}
      <p>{reviewCount} reviews</p>
      <div className="mt-2">
        <Link href={`/movies/${movie.id}`}>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Go to Reviews
          </button>
        </Link>
      </div>
    </div>
  );
}
