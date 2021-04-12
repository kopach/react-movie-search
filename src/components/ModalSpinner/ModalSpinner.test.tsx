import React from 'react'
import { shallow } from 'enzyme'
import { ModalSpinner } from './ModalSpinner'

describe('<ModalSpinner />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<ModalSpinner />)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it('renders as expected', () => {
    expect(component).toMatchSnapshot()
  })
})
