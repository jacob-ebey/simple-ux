import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge } from '../tools'

import './style.scss'

const Dropdown = ({ label, class: className, children, ...rest }) => (
  <a
    {...rest}
    class={merge('dropdown', className)}
  >
    <div class='dropdown-label'>
      {label}
    </div>
    <div class='dropdown-content'>
      {children}
    </div>
  </a>
)

export default Dropdown
