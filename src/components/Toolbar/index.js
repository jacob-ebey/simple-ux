import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge, childArray } from '../tools'

import './style.scss'

const Toolbar = ({ title, class: className, children, ...rest }) => {
  const c = childArray(children)

  return (
    <nav
      {...rest}
      class={merge('toolbar', className)}
    >
      <div class='toolbar-body'>
        { title && <div class='toolbar-title'>{title}</div>}
        { c.length > 0 && <div class='toolbar-items'>{children}</div> }
      </div>
    </nav>
  )
}

export default Toolbar
