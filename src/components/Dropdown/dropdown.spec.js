/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Dropdown from './'

describe('Dropdown', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Dropdown />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Dropdown class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children', () => {
      const wrapper = shallow(
        <Dropdown>
          <p>Child 1</p>
          <p>Child 2</p>
        </Dropdown>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('can render label', () => {
      const wrapper = shallow(<Dropdown label={<a>Label</a>} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
