import { NavLink } from "react-router-dom";

export function Navigation(){
  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-blue-700">
        <ul>
          <li className="flex justify-end gap-x-5 text-white px-6 py-3 text-sm">
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/todos">Todos</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}