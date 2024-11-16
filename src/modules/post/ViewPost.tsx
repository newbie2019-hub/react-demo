import { Link, useLoaderData } from "react-router-dom"
import type { Post } from "../../types/posts"

export function ViewPost() {
  const post: Post = useLoaderData() as Post

  return (
    <>
      <Link to="..">
        Back to Posts
      </Link>
      <h1 className="font-medium">
        {post.title}
      </h1>
      <p className="text-sm text-gray-800">
        {post.body}
      </p>
    </>
  )
}