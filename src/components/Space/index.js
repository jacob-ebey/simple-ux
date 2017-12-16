import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge, mod } from '../tools'

import './style.scss'

const Space = ({ breakpoint, even, class: className, children, ...rest }) => (
  <div
    {...rest}
    class={
      merge(
        'spacer',
        mod('spacer', even && 'even'),
        mod('spacer-break', breakpoint && breakpoint),
        className
      )
    }
  >
    {children}
  </div>
)

export default Space
