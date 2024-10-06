"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function ReviewDelete({ review, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    const res = await fetch("/api/reviews/${review.id}", {
      method: "DELETE",
    });

    if (res.ok) {
      onDelete(review.id);
    } else {
      alert("failed to delete the review.");
    }

    setIsDeleting(false);
  }

  return (
    <div>
      <p>{review.content}</p>
      <Button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    </div>
  );
}
