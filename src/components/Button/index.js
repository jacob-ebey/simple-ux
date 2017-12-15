import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import { merge, merge2, mod, raise } from '../tools'

import './style.scss'

/**
 * Button Component
 */
export default class Button extends Component {
  render (props) {
    const { animation, color, disabled, onClick, class: className, children, ...rest } = props

    return (
      <a
        {...rest}
        class={
          merge(
            'button',
            mod('button', color),
            mod('button', disabled && 'disabled'),
            mod('button', merge2(animation, color)),
            className
          )
        }
        onClick={onClick && this._handleClick}
      >
        {children}
      </a>
    )
  }

  _handleClick = (ev) => {
    const { onClick, disabled } = this.props

    raise(onClick && !disabled, () => {
      ev.preventDefault()

      onClick(ev)
    })
  }
}
