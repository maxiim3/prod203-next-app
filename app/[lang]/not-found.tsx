import Link from 'next/link'

export default function NotFound() {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <h1 className="text-center text-4xl font-bold">Error</h1>
         <p className="text-center text-xl">404</p>
         <Link
            className="mt-4 rounded-md bg-black px-4 py-2 text-white"
            href={'/'}>
            Reset
         </Link>
      </div>
   )
}
