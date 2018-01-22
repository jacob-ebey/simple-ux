/* eslint-env jest */
import { h } from 'preact' // eslint-disable-line no-unused-vars
import { shallow } from 'preact-render-spy'

import Button from '../Button'

import Stepper from './'

describe('Stepper', () => {
  describe('- snapshots -', () => {
    it('can render', () => {
      const wrapper = shallow(<Stepper />)
      expect(wrapper).toMatchSnapshot()
    })

    it('can add custom class', () => {
      const wrapper = shallow(<Stepper class='custom' />)
      expect(wrapper).toMatchSnapshot()
    })

    it('only renders first child', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('only renders second child', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )

      wrapper.setState({ step: 1 })
      expect(wrapper).toMatchSnapshot()
    })

    it('can render title', () => {
      const wrapper = shallow(<Stepper title='ROFL' />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('- logic -', () => {
    it('can increment', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )

      wrapper.find(<Button data-test='increment' />).simulate('click')
      expect(wrapper.state('step')).toBe(1)
    })

    it('does not increment', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
        </Stepper>
      )
      const increment = wrapper.find(<Button data-test='increment' />)
      increment.simulate('click')
      expect(wrapper.state('step')).toBe(0)
    })

    it('does not increment when custom', () => {
      const wrapper = shallow(
        <Stepper canIncrement={() => false}>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )
      const increment = wrapper.find(<Button data-test='increment' />)
      increment.simulate('click')
      expect(wrapper.state('step')).toBe(0)
    })

    it('can decrement', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )
      wrapper.setState({ step: 1 })
      const decrement = wrapper.find(<Button data-test='decrement' />)
      decrement.simulate('click')
      expect(wrapper.state('step')).toBe(0)
    })

    it('does not decrement', () => {
      const wrapper = shallow(
        <Stepper>
          <span>Child 1</span>
        </Stepper>
      )
      const decrement = wrapper.find(<Button data-test='decrement' />)
      decrement.simulate('click')
      expect(wrapper.state('step')).toBe(0)
    })

    it('does not decrement when custom', () => {
      const wrapper = shallow(
        <Stepper canDecrement={() => false}>
          <span>Child 1</span>
          <span>Child 2</span>
        </Stepper>
      )
      wrapper.setState({ step: 1 })
      const decrement = wrapper.find(<Button data-test='decrement' />)
      decrement.simulate('click')
      expect(wrapper.state('step')).toBe(1)
    })
  })
})
