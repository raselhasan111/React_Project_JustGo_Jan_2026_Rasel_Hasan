import { useSearchParams } from 'react-router-dom'

function Search() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    return <h1>Search Page - Query: {query}</h1>
}

export default Search
