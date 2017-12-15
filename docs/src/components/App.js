import { h } from 'preact' // eslint-disable-line no-unused-vars

import 'src'

import Code from 'src/components/Code'
import Content from 'src/components/Content'

import ButtonExample from './ButtonExample'
import CodeExample from './CodeExample'
import ContentExample from './ContentExample'
import SpaceExample from './SpaceExample'
import StepperExample from './StepperExample'

import './style.scss'

const App = () => (
  <div>
    <Content>
      <h1>Simple-UX</h1>
      <p>Simple yet elegant components for Preact.</p>
      <hr />

      <h2>Getting Started</h2>

      <p>Install the simple-ux packae:</p>
      <Code>{`npm install -s simple-ux`}</Code>

      <p>Import a component</p>
      <Code>{`import { Button } from 'simple-ux'`}</Code>

      <p>You are up and running!</p>

      <h2>Layout Components</h2>

      <p>
        We think less is more. That means we provide you with a few components to
        keep you on the right track in maintaining a good experience for users on
        every device.
      </p>

      <ul>
        <li><a href='#content-example'>Content</a></li>
        <li><a href='#space-example'>Space</a></li>
      </ul>
    </Content>

    <ContentExample />
    <SpaceExample />

    <Content>
      <h2>Components</h2>

      <ul>
        <li><a href='#button-example'>Button</a></li>
        <li><a href='#code-example'>Code</a></li>
        <li><a href='#stepper-example'>Stepper</a></li>
      </ul>
    </Content>

    <ButtonExample />
    <CodeExample />
    <StepperExample />
  </div>
)

export default App
