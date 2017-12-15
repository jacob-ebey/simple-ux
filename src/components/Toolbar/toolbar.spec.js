/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Toolbar from './'

describe('Toolbar', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Toolbar />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Toolbar class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children', () => {
      const wrapper = shallow(
        <Toolbar>
          <p>Child 1</p>
          <p>Child 2</p>
        </Toolbar>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('can render title', () => {
      const wrapper = shallow(<Toolbar title={<a>Title</a>} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
