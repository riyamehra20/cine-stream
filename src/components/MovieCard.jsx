import React from 'react'
import { IMAGE_BASE_URL } from '../api'
import './MovieCard.css'

function MovieCard({ movie }) {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
  } = movie

  const releaseYear = release_date ? release_date.split('-')[0] : 'N/A'

  const rating = vote_average ? vote_average.toFixed(1) : '—'

  const ratingClass =
    vote_average >= 7.5 ? 'rating--high'
    : vote_average >= 5  ? 'rating--mid'
    : 'rating--low'

  return (
    <article className="movie-card">
      {}
      {poster_path ? (
        <img
          className="movie-card__poster"
          src={`${IMAGE_BASE_URL}${poster_path}`}
          alt={`${title} poster`}
          loading="lazy"
        />
      ) : (
        <div className="movie-card__poster-placeholder" aria-label="No poster available">
          <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="100" height="150" fill="#1e1e1e"/>
            <text x="50" y="70" textAnchor="middle" fill="#444" fontSize="28">🎬</text>
            <text x="50" y="95" textAnchor="middle" fill="#444" fontSize="9">No Poster</text>
          </svg>
        </div>
      )}

      <div className="movie-card__info">
        <h3 className="movie-card__title" title={title}>{title}</h3>
        <div className="movie-card__meta">
          <span className="movie-card__year">{releaseYear}</span>
          <span className={`movie-card__rating ${ratingClass}`}>
            ★ {rating}
          </span>
        </div>
      </div>
    </article>
  )
}

export default MovieCard
