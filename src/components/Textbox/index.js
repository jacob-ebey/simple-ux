import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge, mod } from '../tools'

import './style.scss'

let textboxCount = 0

const Textbox = ({ multiline, label, inline, id, class: className, ...rest }) => {
  const inputId = id || `textbox_${textboxCount++}`

  const Input = multiline ? 'textarea' : 'input'

  return (
    <div class={merge('textbox', mod('textbox', inline && 'inline'), className)}>
      { label && <label for={inputId}>{label}</label> }

      <Input
        {...rest}
        id={inputId}
      />
    </div>
  )
}

export default Textbox
