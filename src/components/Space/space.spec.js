/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Space from './'

describe('Space', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Space />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can space even', () => {
      const wrapper = shallow(<Space even />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Space class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add breakpoint', () => {
      const wrapper = shallow(<Space breakpoint='phablet' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class and space even', () => {
      const wrapper = shallow(<Space class='custom' even />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children child', () => {
      const wrapper = shallow(
        <Space>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </Space>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
