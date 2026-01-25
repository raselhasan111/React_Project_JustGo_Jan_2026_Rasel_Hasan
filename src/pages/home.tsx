import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 w-screen">
      <h1 className="text-3xl font-bold">
        JustGo Assignment{' '}
        <span className="text-2xl text-blue-600">(by Rasel Hasan)</span>
      </h1>
      <p className="text-xl font-bold">
        (React + TypeScript + Vite + Tailwind CSS)
      </p>
      <Link to="/products" className="text-blue-600 underline">
        Go to Products Page
      </Link>
    </div>
  )
}

export default Home
