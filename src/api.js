import axios from 'axios'

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const API_KEY = 'e3ad3188be1e0931d76bc9a01527175c'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchPopularMovies = async (page = 1) => {
  const response = await tmdb.get('/movie/popular', {
    params: {
      api_key: API_KEY,
      page
    },
  })
  return response.data
}

export const searchMovies = async (query, page = 1) => {
  const response = await tmdb.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page
    },
  })
  return response.data
}

export default tmdb