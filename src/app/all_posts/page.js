import { connect } from "@/utilities/connect"

export default async function Page() {
    const db = connect()

    const posts = (await db.query(`SELECT * FROM posts`)).rows

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {posts.map(posts => (
                <div key={posts.id} className="relativ group">
<div>
    <h2>
        {posts.title}
    </h2>
</div>
<div>
    <p>
        {posts.content}
    </p>
</div>

                </div>
            ))}
        </div>
    )
}