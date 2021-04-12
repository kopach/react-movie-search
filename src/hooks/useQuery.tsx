import { useLocation } from 'react-router-dom'

export function useQuery<T = {}>(): Partial<T> {
  const searchParams = new URLSearchParams(useLocation().search)

  return Array.from(searchParams).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value,
    }
  }, {})
}
