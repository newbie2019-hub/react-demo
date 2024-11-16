import { useLoaderData, useNavigation } from "react-router-dom"
import type { Users } from "../../types/users"
import { UserCard } from "./components/UserCard"
import { Fragment } from "react"

export function Users(){
  const users: Users[] = useLoaderData() as Users[]
  const { state } = useNavigation()

  return (
    <>
      <div className="mb-2">
        <h1 className="">Users List</h1>
        <p className="text-gray-600 text-sm">This is a demo react project</p>
      </div>
      <div className="flex flex-wrap gap-3 justify-start">
        {state === 'loading' ? 
          <p>Loading...</p> : 
          users?.map(user => (
            <Fragment key={user.id}>
              <UserCard {...user}/>
            </Fragment>
          ))
        }
      </div>
    </>
  )
}