/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Select from './'

const createItems = () => [
  { key: 1, label: 'Item 1' },
  { key: 2, label: 'Item 2' }
]

describe('Select', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Select />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Select class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children', () => {
      const wrapper = shallow(
        <Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('can render label', () => {
      const wrapper = shallow(<Select label='Test Label' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render inline', () => {
      const wrapper = shallow(<Select inline />)
      expect(wrapper).toMatchSnapshot()
    })

    it('uses provided id', () => {
      const wrapper = shallow(<Select id='testid' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render string items', () => {
      const wrapper = shallow(<Select items={['1', '2']} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render items', () => {
      const wrapper = shallow(<Select items={createItems()} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can handle undefined item', () => {
      const wrapper = shallow(<Select items={[0, undefined]} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can handle object without label', () => {
      const wrapper = shallow(<Select items={[{ key: 1 }]} />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render items and children', () => {
      const wrapper = shallow(
        <Select id='testid' items={createItems()}>
          <option>Default</option>
        </Select>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
