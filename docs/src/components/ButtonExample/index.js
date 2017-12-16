import { h } from 'preact' // eslint-disable-line no-unused-vars

import Button from 'src/components/Button'
import Code from 'src/components/Code'
import Content from 'src/components/Content'

import './style.scss'

const ButtonExample = () => (
  <Content id='button-example'>
    <h3>Button</h3>

    <p>Buttons are rendered as {`<a />`} elements by default, allowing you to provide an href.</p>

    <p>If an onClick is provided, the event will have preventDefault called for you.</p>

    <h4>Type</h4>

    <p>
      If submit is provided as the type, then a {`<button />`} element will be rendered. This
      is how you would create a form submit button.
    </p>

    <Code>{`<Button type='submit'>Submit</Button>`}</Code>

    <Button type='submit'>Submit</Button>

    <h4>Colors</h4>

    <p>The current colors are: primary, secondary.</p>

    <Code>{`<Button color='primary'>Primary</Button>`}</Code>

    <div class='button-example-space'>
      <Button>Default</Button>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
    </div>

    <br />

    <h4>Animations</h4>

    <p>The current animations are: raise, pulse.</p>

    <Code>{`<Button animation='raise'>Raise</Button>`}</Code>

    <h5>Raise</h5>
    <div class='button-example-space'>
      <Button animation='raise'>Default</Button>
      <Button color='primary' animation='raise'>Primary</Button>
      <Button color='secondary' animation='raise'>Secondary</Button>
    </div>

    <h5>Pulse</h5>
    <div class='button-example-space'>
      <Button animation='pulse'>Default</Button>
      <Button color='primary' animation='pulse'>Primary</Button>
      <Button color='secondary' animation='pulse'>Secondary</Button>
    </div>
  </Content>
)

export default ButtonExample
