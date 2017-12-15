/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Content from './'

describe('Content', () => {
  describe('- snapshots -', () => {
    test('can render', () => {
      const wrapper = shallow(<Content />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Content class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    test('can render children', () => {
      const wrapper = shallow(
        <Content>
          <p>Child 1</p>
          <p>Child 2</p>
        </Content>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
