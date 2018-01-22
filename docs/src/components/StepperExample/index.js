import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content, Stepper } from 'src'

import './style.scss'

const StepperExample = () => (
  <Content id='stepper-example'>
    <h3>Stepper</h3>

    <p>
      This component can be used for building things like
      progressive forms or a slideshow.
    </p>

    <h4>Props</h4>
    <p>title - <small>The title of the stepper.</small></p>
    <p>nextLabel - <small>The label of the increment step button.</small></p>
    <p>previousLabel - <small>The label of the increment step button.</small></p>
    <p>canIncrement - <small>A function that returns if the stepper can increment.</small></p>
    <p>canDecrement - <small>A function that returns if the stepper can decrement.</small></p>

    <h4>Example</h4>
    <Code>
      {`
<Stepper title='Title'>
  <Content>Step 1</Content>
  <Content>Step 2</Content>
  <Content>Step 3</Content>
</Stepper>
      `}
    </Code>

    <Stepper title='Title'>
      <Content>Step 1</Content>
      <Content>Step 2</Content>
      <Content>Step 3</Content>
    </Stepper>

  </Content>
)

export default StepperExample
