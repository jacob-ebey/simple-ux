import { h } from 'preact' // eslint-disable-line no-unused-vars

import { merge, mod } from '../tools'

import './style.scss'

let selectCount = 0

const Select = ({ label, items, inline, id, class: className, children, ...rest }) => {
  const selectId = id || `select_${selectCount++}`

  return (
    <div class={merge('select', mod('select', inline && 'inline'), className)}>
      { label && <label for={selectId}>{label}</label> }

      <select
        {...rest}
        id={selectId}
      >
        {children}
        {
          items && items.filter(item => typeof item !== 'undefined').map((item, index) => {
            let label = index
            let key = index

            if (typeof item !== 'object') {
              key = label = item
            } else {
              label = item.label || item.key
              key = item.key
            }

            return <option key={key} value={key}>{label}</option>
          })
        }
      </select>
    </div>
  )
}

export default Select
