import React from 'react'
import { shallow } from 'enzyme'
import { MovieList } from './MovieList'

jest.mock('../../recoil/selectors/movieSelectors', () => ({
  searchMoviesByTitle: () => {},
}))
jest.mock('recoil', () => ({
  useRecoilValue: () => ({
    Search: [],
  }),
}))
jest.mock('react-router-dom', () => ({
  useLocation: () => ({}),
}))

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/MovieList',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<MovieList />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<MovieList {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
