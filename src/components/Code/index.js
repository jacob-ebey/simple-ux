import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge, childArray } from '../tools'

import './style.scss'

const Code = ({ class: className, children, ...rest }) => {
  let c = childArray(children)

  if (childArray.length === 1 && typeof children[0] === 'string') {
    c = children[0].trim()
  }

  return (
    <pre
      {...rest}
      class={merge('code-block', className)}
    ><code>
      {c}
    </code></pre>
  )
}

export default Code
