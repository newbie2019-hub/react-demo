import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { Todos } from "../modules/Todos";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { user } from "./user";
import { post } from "./post";
import { Error } from "../modules/error/Error";

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />
      },
      user, 
      post,
      {
        path: '/todos',
        element: <Todos />
      },
    ]
  }
])