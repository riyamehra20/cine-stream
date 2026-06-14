#  CineStream 

These are the actual questions and problems faced while building
the CineStream project.

1. State Management in App.jsx
Juggling multiple states together:
const [movies, setMovies] = useState([])
const [page, setPage] = useState(1)
const [query, setQuery] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const [hasMore, setHasMore] = useState(true)

2. Search + Infinite Scroll Together
User types → switch to search mode
User clears → switch back to popular movies
But infinite scroll must reset too!

Managing two different data sources
Resetting page number when search changes
Debouncing so API isn't called on every keypress

```
3. Infinite Scroll Logic
// Detecting when user hits bottom of page
// then loading next page without duplicates
// and stopping when no more pages left


