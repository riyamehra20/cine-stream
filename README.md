#  CineStream — Media Explorer

A modern movie discovery web app built with React and the TMDB API. Browse popular movies, search by title, and explore an infinite scroll feed — all in a sleek dark-themed UI.

---

##  Features

-  Browse popular movies (powered by TMDB)
-  Search movies by title in real-time
-  Infinite scroll for seamless browsing
-  Movie cards with posters, titles, and ratings
-  Responsive design for mobile and desktop
-  Fast and lightweight with Vite + React

---

##  Tech Stack

| Tech | Purpose |
|---|---|
| React | UI framework |
| Vite | Build tool & dev server |
| Axios | API requests |
| TMDB API | Movie data & images |
| CSS Modules | Component styling |

---

## Project Structure


cine-stream/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Logo + Search bar
│   │   ├── MovieGrid.jsx    # Grid layout for movie cards
│   │   └── MovieCard.jsx    # Individual movie card
│   ├── hooks/
│   │   ├── useDebounce.js       # Debounce hook for search
│   │   └── useInfiniteScroll.js # Infinite scroll hook
│   ├── api.js               # Axios instance + TMDB API calls
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── .env                     # Environment variables (not committed)
├── .env.example             # Example env file
├── vite.config.js
└── package.json



##  Getting Started

### Prerequisites

- Node.js v18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cine-stream.git
   cd cine-stream
   ```

2. **Install dependencies**
   
   npm install


4. **Start the development server**

   npm run dev


5. Open [http://localhost:5173](http://localhost:5173) in your browser


##  Getting a TMDB API Key

1. Create a free account at [themoviedb.org](https://www.themoviedb.org/)
2. Go to **Settings → API**
3. Scroll down to **API Key (v3 auth)** — it's a short 32-character key
4. Copy and paste it into your `.env` file as `VITE_TMDB_KEY`


##  Available Scripts
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
##  License

This project is for educational purposes. Movie data is provided by [TMDB](https://www.themoviedb.org/).
