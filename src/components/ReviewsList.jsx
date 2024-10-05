"use client";

import { useState } from "react";
import ReviewDelete from "@/components/ReviewDelete";

export default function ReviewsList({ reviews: initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);

  function handleReviewDelete(deletedReviewId) {
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== deletedReviewId)
    );
  }

  return (
    <div>
      {reviews.map((review) => (
        <ReviewDelete
          key={review.id}
          review={review}
          onDelete={handleReviewDelete}
        />
      ))}
    </div>
  );
}
