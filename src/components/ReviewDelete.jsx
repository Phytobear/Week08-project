"use client";

import { useState } from "react";

export default function ReviewDelete({ review, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    const res = await fetch(`/api/reviews/${review.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      onDelete(review.id);
    } else {
      alert("Failed to delete the review.");
    }

    setIsDeleting(false);
  }

  return (
    <div>
      <p>{review.content}</p>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
