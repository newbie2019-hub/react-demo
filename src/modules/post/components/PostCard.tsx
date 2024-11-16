import { Link } from "react-router-dom";
import { Card } from "../../../shared/components/Card";
import { Post } from "../../../types/posts";

export function PostCard(props: Post) {
  return (
    <Link to={`${props.id}`} className="block">
      <Card>
        <h1>{props.title}</h1>
        <p className="text-sm text-gray-800">{props.body}</p>
      </Card>
    </Link>
  )
}