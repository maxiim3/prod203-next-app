'use client'

export default function Error({error, reset}: {error: Error; reset: () => void}) {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <h1 className="text-center text-4xl font-bold">Error</h1>
         <p className="text-center text-xl">{error.message || 'Oops...'}</p>
         <button
            className="mt-4 rounded-md bg-black px-4 py-2 text-white"
            onClick={reset}>
            Reset
         </button>
      </div>
   )
}
