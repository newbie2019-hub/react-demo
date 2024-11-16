import { useLoaderData, useNavigation } from "react-router-dom"
import { Users } from "../../types/users"

export function User(){
  const data: Users = useLoaderData() as Users
  const { state } = useNavigation()

  return (
    <>
     {
      state === 'loading' ? 
        <p>Loading...</p> :
        <div>
          <h1>User Info</h1>
          <p>{data.name}</p>
          <p>{data.username}</p>
          <p>{data.address.street}, {data.address.city}, {data.address.zipcode}</p>
        </div>
     }
    </>
  )
}