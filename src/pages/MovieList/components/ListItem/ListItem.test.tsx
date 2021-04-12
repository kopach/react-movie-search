import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { IListItemProps, ListItem } from './ListItem'

describe('<ListItem />', () => {
  let component: ReturnType<typeof shallow>

  const listItemPropsMock: IListItemProps = {
    posterURL: 'someURL',
    movieTitle: 'some title',
    children: 'some text',
  }

  beforeEach(() => {
    component = shallow(<ListItem {...listItemPropsMock}> </ListItem>)
  })

  it('should mount', () => {
    expect(component.length).toBe(1)
  })

  it('renders as expected', () => {
    const tree = renderer.create(<ListItem {...listItemPropsMock}> </ListItem>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
