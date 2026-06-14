import React from 'react'
import MovieCard from './MovieCard'
import './MovieGrid.css'

function MovieGrid({ movies, sentinelRef, isLoadingMore }) {
  if (!movies.length) return null

  return (
    <section className="movie-grid-section">
      <div className="movie-grid" role="list" aria-label="Movie results">
        {movies.map((movie) => (
          <div key={movie.id} role="listitem">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {}
      <div
        ref={sentinelRef}
        className="movie-grid__sentinel"
        aria-hidden="true"
      />

      {}
      {isLoadingMore && (
        <div className="movie-grid__loading-more" aria-label="Loading more movies">
          <span className="spinner" />
          <span>Loading more...</span>
        </div>
      )}
    </section>
  )
}

export default MovieGrid
