import { selectorFamily } from 'recoil'
import axios from 'axios'

interface Search {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchResponse {
  Search: Search[]
  totalResults: string
  Response: 'True' | 'False'
}

export const searchMoviesByTitle = selectorFamily({
  key: 'getMoviesByTitle',
  get: ({ t, y }: { t?: string; y?: string }) => async (): Promise<SearchResponse> => {
    try {
      const URL = 'https://www.omdbapi.com/?apikey=2cd19c6b&type=movie'

      // TODO: move this into separate rest/ folder
      const res = await axios({
        url: URL,
        method: 'get',
        params: {
          s: t,
          y,
        },
      })

      if (res.data.Response === 'False') {
        return { Search: [], totalResults: '0', Response: 'False' }
      }
      return res.data
    } catch (err) {
      return { Search: [], totalResults: '0', Response: 'False' }
    }
  },
})
