import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import { merge, merge2, mod, raise } from '../tools'

import './style.scss'

/**
 * Button Component
 */
export default class Button extends Component {
  render (props) {
    const { type, animation, color, disabled, onClick, class: className, children, ...rest } = props

    const Comp = type === 'submit' ? 'button' : 'a'

    return (
      <Comp
        {...rest}
        {...(Comp === 'button' ? {type} : {})}
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
      </Comp>
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
