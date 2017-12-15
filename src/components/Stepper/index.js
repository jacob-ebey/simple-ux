import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import Button from '../Button'
import { merge, childArray } from '../tools'

import './style.scss'

/**
 * Stepper Component
 */
export default class Stepper extends Component {
  state = {
    step: 0
  }

  get canIncrement () {
    const { step } = this.state
    const { children } = this.props

    const count = childArray(children).length

    return step < count - 1
  }

  get canDecrement () {
    const { step } = this.state

    return step > 0
  }

  render (props) {
    const { nextLabel, previousLabel, class: className, children, ...rest } = props

    return (
      <div class={merge('stepper', className)} {...rest}>
        <div class='stepper-body'>
          {this._renderStep()}
        </div>
        <div class='stepper-footer'>
          <Button data-test='decrement' disabled={this.canDecrement} onClick={this._decrementStep}>
            {previousLabel}
          </Button>
          <Button data-test='increment' disabled={this.canIncrement} onClick={this._incrementStep}>
            {nextLabel}
          </Button>
        </div>
      </div>
    )
  }

  _renderStep = () => {
    const { step } = this.state
    const { children } = this.props

    const c = childArray(children)

    return c[step]
  }

  _incrementStep = () => {
    const { step } = this.state

    if (this.canIncrement) {
      this.setState({ step: step + 1 })
    }
  }

  _decrementStep = () => {
    const { step } = this.state

    if (this.canDecrement) {
      this.setState({ step: step - 1 })
    }
  }
}

Stepper.defaultProps = {
  nextLabel: 'Next',
  previousLabel: 'Previous'
}
