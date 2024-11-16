import { RouteObject } from "react-router-dom";
import { Post } from "../modules/post/Post";
import { ViewPost } from "../modules/post/ViewPost";

export const post: RouteObject = {
  path: '/posts',
  children: [
    {
      index: true,
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json())
      },
      element: <Post />
    },
    {
      path: ':id',
      loader: async ({ params }) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
          .then((res) => res.json())
      },
      element: <ViewPost /> 
    },
  ]
}