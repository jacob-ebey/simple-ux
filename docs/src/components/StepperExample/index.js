import { h } from 'preact' // eslint-disable-line no-unused-vars

import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Stepper from 'src/components/Stepper'

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
  <div>Step 1</div>
  <div>Step 2</div>
  <div>Step 3</div>
</Stepper>
      `}
    </Code>

    <Stepper title='Title'>
      <div>Step 1</div>
      <div>Step 2</div>
      <div>Step 3</div>
    </Stepper>

  </Content>
)

export default StepperExample
