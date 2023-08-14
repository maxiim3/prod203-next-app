import Link from "next/link"

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center h-screen gap-12">
         <h1 className="text-4xl font-bold">404</h1>
         <p className="text-2xl font-semibold">Page not found</p>
         <Link className={"btn "} href={"/"}>Back Home</Link>
      </div>
   )
}
