import { useLoaderData } from "react-router-dom"
import { PostCard } from "./components/PostCard"
import type { Post } from "../../types/posts"
import { Fragment } from "react"

export function Post() {
  const posts: Post[] = useLoaderData() as Post[]

  return (
    <>
      <p>Posts</p>
      <p className="text-gray-600 text-sm">This is a demo react project.</p>
      <div className="space-y-2 mt-3">
        {posts?.map(post => (
          <Fragment key={post.id}>
            <PostCard {...post} />
          </Fragment>
        ))}
      </div>
    </>
  )
}