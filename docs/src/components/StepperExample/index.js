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
