import { h } from 'preact' // eslint-disable-line no-unused-vars

import Button from 'src/components/Button'
import Code from 'src/components/Code'
import Content from 'src/components/Content'

import './style.scss'

const ButtonExample = () => (
  <Content id='button-example'>
    <h2>Button</h2>

    <h3>Remarks</h3>

    <p>Buttons are rendered as {`<a />`} elements, allowing you to provide an href.</p>

    <p>If an onClick is provided, the event will have preventDefault called for you.</p>

    <h3>Colors</h3>

    <p>The current animations are: primary, secondary.</p>

    <Code>{`<Button color='primary'>Raise</Button>`}</Code>

    <div class='button-example-space'>
      <Button>Default</Button>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
    </div>

    <br />

    <h3>Animations</h3>

    <p>The current animations are: raise, pulse.</p>

    <Code>{`<Button animation='raise'>Raise</Button>`}</Code>

    <h4>Raise</h4>
    <div class='button-example-space'>
      <Button animation='raise'>Default</Button>
      <Button color='primary' animation='raise'>Primary</Button>
      <Button color='secondary' animation='raise'>Secondary</Button>
    </div>

    <h4>Pulse</h4>
    <div class='button-example-space'>
      <Button animation='pulse'>Default</Button>
      <Button color='primary' animation='pulse'>Primary</Button>
      <Button color='secondary' animation='pulse'>Secondary</Button>
    </div>
  </Content>
)

export default ButtonExample
