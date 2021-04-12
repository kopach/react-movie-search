// src/AppRouter.test.tsx
import React from 'react'
import { shallow } from 'enzyme'
import AppRouter from './AppRouter'

describe('<AppRouter />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<AppRouter />)
  })

  test('renders without crashing', () => {
    expect(component.length).toBe(1)
  })
})
