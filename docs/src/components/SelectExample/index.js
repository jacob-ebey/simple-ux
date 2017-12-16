import { h } from 'preact' // eslint-disable-line no-unused-vars

import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Select from 'src/components/Select'

const createItems = () => [
  { key: 1, label: 'Item 1' },
  { key: 2, label: 'Item 2' }
]

const SelectExample = () => (
  <Content id='select-example'>
    <h3>Select</h3>

    <p>
      This component is used for dropdown inputs.
    </p>

    <h4>Label</h4>

    <p>If a label property is provided, a {`<label />`} element will be rendered before the select.</p>

    <Code>{`<Select label='Label' />`}</Code>
    <Select label='Label' items={createItems()} />

    <h4>Inline</h4>

    <p>If an inline property is provided, the label will be rendered to the left of the select.</p>

    <Code>{`<Select inline label='Inline Label' />`}</Code>

    <Select inline label='Inline Label' items={createItems()} />

    <h4>Items</h4>

    <p>
      You can provide items via the item property in the folling formats:
    </p>

    <ul>
      <li>String</li>
      <li>Number</li>
      <li>{`{ key: '', label: '' }`}</li>
    </ul>

    <Code>{`<Select items={[0, 1, 2]} />`}</Code>

    <Select items={[0, 1, 2]} />

    <p>Or as children</p>

    <Code>
      {`
<Select>
  <option>0</option>
  <option>1</option>
  <option>2</option>
</Select>
      `}
    </Code>

    <Select>
      <option>0</option>
      <option>1</option>
      <option>2</option>
    </Select>
  </Content>
)

export default SelectExample
