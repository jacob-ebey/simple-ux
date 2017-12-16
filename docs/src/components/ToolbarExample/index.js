import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content, Dropdown, Toolbar } from 'src'

const ToolbarExample = () => (
  <Content id='toolbar-example'>
    <h3>Toolbar</h3>

    <p>
      This component can be used as the navigation bar. It is used on this site.
    </p>

    <Code>
      {`
<Toolbar title='Title'>
  <a>Item 1</a>
  <a>Item 2</a>
  <Dropdown label='Dropdown'>
    <a>Item 1</a>
    <a>Item 2</a>
  </Dropdown>
</Toolbar>
      `}
    </Code>

    <Toolbar title='Title'>
      <a>Item 1</a>
      <a>Item 2</a>
      <Dropdown label='Dropdown'>
        <a>Item 1</a>
        <a>Item 2</a>
      </Dropdown>
    </Toolbar>
  </Content>
)

export default ToolbarExample
