import { RouteObject } from "react-router-dom";
import { User } from "../modules/user/User";
import { Users } from "../modules/user/Users";

export const user: RouteObject = {
  path: '/users',
  children: [
    {
      index: true,
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
      },
      element: <Users />
    },
    {
      path: ':id',
      loader: async ({ params }) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((res) => res.json())
      },
      element: <User />
    }
  ]
}