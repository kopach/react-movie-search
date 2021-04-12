import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { SearchForm } from './SearchForm'

describe('<SearchForm />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<SearchForm />)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it('renders as expected', () => {
    const tree = renderer.create(<SearchForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
