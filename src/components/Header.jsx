import React from 'react'
import SearchBar from './SearchBar'
import './Header.css'

function Header({ searchQuery, onSearchChange, onSearchClear }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Cine-Stream home">
          CINE<span>STREAM</span>
        </a>

        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          onClear={onSearchClear}
        />
      </div>
    </header>
  )
}

export default Header
