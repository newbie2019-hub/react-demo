export function Card({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-white rounded-md p-3 border hover:bg-gray-200 transition-all ease-in duration-150 cursor-pointer">
      {children}
    </div>
  )
}