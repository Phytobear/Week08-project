import Link from "next/link";
import LinkButton from "@/components/LinkButton";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between w-4/12 m-8 items-center">
      <LinkButton href="/add-review">Add a Review</LinkButton>
      <LinkButton href="/movies">All Movies</LinkButton>
    </div>
  );
}
