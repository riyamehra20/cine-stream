import React, { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import MovieGrid from './components/MovieGrid'
import useDebounce from './hooks/useDebounce'
import useInfiniteScroll from './hooks/useInfiniteScroll'
import { fetchPopularMovies, searchMovies } from './api'
import './App.css'

function App() {
  const [movies, setMovies]           = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage]               = useState(1)
  const [totalPages, setTotalPages]   = useState(1)
  const [isLoading, setIsLoading]     = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [error, setError]             = useState(null)

  const debouncedQuery = useDebounce(searchQuery, 500)

  const hasMore    = page < totalPages
  const isSearching = debouncedQuery.trim().length > 0


  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      setError(null)
      setPage(1)

      try {
        const data = isSearching
          ? await searchMovies(debouncedQuery, 1)
          : await fetchPopularMovies(1)

        setMovies(data.results)
        setTotalPages(data.total_pages)
      } catch (err) {
        setError('Failed to load movies. Check your API key and connection.')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [debouncedQuery])

  
  useEffect(() => {
    if (page === 1) return

    const loadMore = async () => {
      setIsLoadingMore(true)
      try {
        const data = isSearching
          ? await searchMovies(debouncedQuery, page)
          : await fetchPopularMovies(page)

        
        setMovies((prev) => [...prev, ...data.results])
        setTotalPages(data.total_pages)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoadingMore(false)
      }
    }

    loadMore()
  }, [page]) 


  const handleLoadMore = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      setPage((prev) => prev + 1)
    }
  }, [isLoadingMore, hasMore])

  const sentinelRef = useInfiniteScroll(handleLoadMore, hasMore)


  const handleSearchChange = (value) => {
    setSearchQuery(value)
  }

  const handleSearchClear = () => {
    setSearchQuery('')
  }


  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchClear={handleSearchClear}
      />

      <main className="app__main">
        {/* Section title */}
        <div className="app__section-header">
          <h2 className="app__section-title">
            {isSearching
              ? `Results for "${debouncedQuery}"`
              : 'Popular Movies'}
          </h2>
          {movies.length > 0 && !isLoading && (
            <span className="app__count">{movies.length} loaded</span>
          )}
        </div>

      
        {isLoading && (
          <div className="app__initial-loader" role="status" aria-live="polite">
            <span className="spinner spinner--lg" />
            <p>Loading movies...</p>
          </div>
        )}

        
        {error && !isLoading && (
          <div className="app__error" role="alert">
            <p>⚠ {error}</p>
            <p className="app__error-hint">
              Make sure you've added your <code>VITE_TMDB_KEY</code> to a <code>.env</code> file.
            </p>
          </div>
        )}

        
        {!isLoading && !error && movies.length === 0 && (
          <div className="app__empty" role="status">
            <p>No movies found for "{debouncedQuery}".</p>
            <p>Try a different search term.</p>
          </div>
        )}

       
        {!isLoading && movies.length > 0 && (
          <MovieGrid
            movies={movies}
            sentinelRef={sentinelRef}
            isLoadingMore={isLoadingMore}
          />
        )}

      
        {!hasMore && movies.length > 0 && !isLoading && (
          <p className="app__end-message">You've reached the end</p>
        )}
      </main>
    </div>
  )
}

export default App
