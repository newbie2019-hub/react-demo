import { Link } from "react-router-dom";
import { Card } from "../../../shared/components/Card";
import type { Users } from "../../../types/users";

export function UserCard(props: Users) {
  return (
    <Link to={`${props.id}`}>
      <Card>
        <h1>{props.name}</h1>
        <p className="text-xs text-gray-600">
          {props.email}
        </p>
        <p className="text-xs text-gray-600 mt-3">
          {props.company.name}
        </p>
        <p className="text-xs text-gray-600">
          {props.address.street}, {props.address.city}
        </p>
      </Card>
    </Link>
  )
}