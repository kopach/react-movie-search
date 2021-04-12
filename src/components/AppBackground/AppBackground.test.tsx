import React from 'react'
import { shallow } from 'enzyme'
import { AppBackground } from './AppBackground'

describe('<AppBackground />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<AppBackground />)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it('renders as expected', () => {
    expect(component).toMatchSnapshot()
  })
})
