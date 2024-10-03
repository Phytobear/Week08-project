import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between w-4/12 m-8 items-center">
            <Link href='/add_posts'>add_post</Link>
            <Link href='/all_posts'>all_posts</Link>
        </div>
    )
}