import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content, Dropdown } from 'src'

const DropdownExample = () => (
  <Content id='dropdown-example'>
    <h3>Dropdown</h3>

    <p>
      This component can be used as the navigation bar. It is used on this site.
    </p>

    <Code>
      {`
<Dropdown label='Dropdown Example'>
  <a>Item 1</a>
  <a>Item 2</a>
</Dropdown>
      `}
    </Code>

    <Dropdown label='Dropdown Example'>
      <a>Item 1</a>
      <a>Item 2</a>
    </Dropdown>
  </Content>
)

export default DropdownExample
