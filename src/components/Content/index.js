import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge } from '../tools'

import './style.scss'

const Content = ({ class: className, children, ...rest }) => (
  <article
    {...rest}
    class={merge('content', className)}
  >
    {children}
  </article>
)

export default Content
