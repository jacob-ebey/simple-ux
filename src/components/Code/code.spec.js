/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Code from './'

describe('Code', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Code />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Code class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can render children child', () => {
      const wrapper = shallow(
        <Code>
          <span>Child 1</span>
          <span>Child 2</span>
        </Code>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('can render string child', () => {
      const wrapper = shallow(
        <Code>
          {`console.log('Hello, Test!')`}
        </Code>
      )
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('- logic -', () => {
    it('trims string child', () => {
      const code = ` console.log('Hello, Test!') `
      const wrapper = shallow(
        <Code>
          {code}
        </Code>
      )

      const renderedCode = wrapper.text()

      expect(renderedCode).toBe(code.trim())
    })
  })
})
