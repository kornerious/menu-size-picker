import React from 'react'
import PopoverContent from './PopoverContent'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
import { shallow } from 'enzyme'

describe('Popover Content', () => {
  it('renders correctly with no error message', () => {
    const component = shallow(
      <PopoverContent filterItem={'size'} buttonItems={['size']} items={['size']} />
    )
    expect(component).toMatchSnapshot()
  })
})
