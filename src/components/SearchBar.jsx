import React from 'react'
import './SearchBar.css'

function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="search-bar" role="search">
      <span className="search-bar__icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      </span>

      <input
        className="search-bar__input"
        type="search"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search movies"
        autoComplete="off"
        spellCheck="false"
      />

      {value && (
        <button
          className="search-bar__clear"
          onClick={onClear}
          aria-label="Clear search"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
