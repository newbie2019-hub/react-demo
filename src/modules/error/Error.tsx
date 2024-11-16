import { useRouteError } from "react-router-dom"
import type { Error } from "../../types/routeError"

export function Error() {
  const error = useRouteError() as Error

  return (
    <>
      <h1 className="font-medium">
        Oops! Something went wrong
      </h1>
      <pre>
        {error.message}
        {error.stack}
      </pre>
    </>
  )
}