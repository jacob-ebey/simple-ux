import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge } from '../tools'

import './style.scss'

const Code = ({ class: className, children, ...rest }) => {
  return (
    <pre
      {...rest}
      class={merge('code-block', className)}
    ><code>
      {
        children && children.length === 1 && typeof children[0] === 'string'
          ? children[0].trim()
          : children
      }
    </code></pre>
  )
}

export default Code
