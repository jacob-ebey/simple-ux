/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Textbox from './'

describe('Textbox', () => {
  describe('- snapshots -', () => {
    test('can render', () => {
      const wrapper = shallow(<Textbox />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Textbox class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    test('can render label', () => {
      const wrapper = shallow(<Textbox label='Test Label' />)
      expect(wrapper).toMatchSnapshot()
    })

    test('can render inline', () => {
      const wrapper = shallow(<Textbox inline />)
      expect(wrapper).toMatchSnapshot()
    })

    test('can render multiline', () => {
      const wrapper = shallow(<Textbox multiline />)
      expect(wrapper).toMatchSnapshot()
    })

    test('uses provided id', () => {
      const wrapper = shallow(<Textbox id='testid' />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
