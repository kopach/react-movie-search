import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

// @ts-ignore
import { styleSheetSerializer } from 'jest-styled-components/serializer'
// @ts-ignore
import { addSerializer } from 'jest-specific-snapshot'
import { HomePage } from './HomePage'

addSerializer(styleSheetSerializer)

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HomePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<HomePage />', () => {
  let component: ReturnType<typeof shallow>

  beforeEach(() => {
    component = shallow(<HomePage {...routeComponentPropsMock} />)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it('renders as expected', () => {
    const tree = renderer.create(<HomePage {...routeComponentPropsMock} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
