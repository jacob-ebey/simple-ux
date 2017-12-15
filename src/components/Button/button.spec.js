/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Button from './'

describe('Button', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Button />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Button class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children', () => {
      const wrapper = shallow(
        <Button>
          <span>Child 1</span>
          <span>Child 2</span>
        </Button>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('- logic -', () => {
    it('raises onClick', () => {
      const props = {
        onClick: jest.fn()
      }
      const wrapper = shallow(<Button {...props} />)

      wrapper.find('a').simulate('click', {
        preventDefault: jest.fn()
      })

      expect(props.onClick).toHaveBeenCalledTimes(1)
    })

    it('prevents default', () => {
      const props = {
        onClick: jest.fn()
      }
      const wrapper = shallow(<Button {...props} />)

      const ev = {
        preventDefault: jest.fn()
      }
      wrapper.find('a').simulate('click', ev)

      expect(props.onClick).toHaveBeenCalledTimes(1)
      expect(props.onClick).toHaveBeenCalledWith(ev)

      expect(ev.preventDefault).toHaveBeenCalledTimes(1)
    })
  })
})
