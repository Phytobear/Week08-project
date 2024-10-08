// import { connect } from "@/utilities/connect";
// import Image from "next/image";
// import Link from "next/link";

export default async function Reviews({ searchParams }) {
  //   const db = connect();

  //   const reviews = (await db.query(`SELECT * FROM reviews`)).rows;

  //   //?why is this declared but never used? ----------------------------------------------------------------------------------------------------------------------------
  //   const sorted = reviews.sort((a, b) => {
  //     if (searchParams.sortBy === "asc") {
  //       return a.movies_id.localeCompare(b.movies_id);
  //     } else if (searchParams.sortBy === "desc") {
  //       return b.movies_id.localeCompare(a.movies_id);
  //     }
  //   });

  return (
    <h1>comming soon</h1>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    //       <div>
    //         {/* //TODO Make these buttons ------------------------------------------------------------------------------------------------------------------------------*/}
    //         <Link href="/reviews?sortBy=asc">Sort by asc</Link>
    //         <Link href="/reviews?sortBy=desc">Sort by desc</Link>
    //         <Link href="/reviews">Remove sort</Link>
    //       </div>

    //       {reviews.map((reviews) => (
    //         <div key={reviews.id} className="relative group">
    //           <div>
    //             <Link href={`/reviews/${reviews.id}`}>{reviews.title}</Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
  );
}
