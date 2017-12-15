import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import 'src'

import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Dropdown from 'src/components/Dropdown'
import Toolbar from 'src/components/Toolbar'

import smoothscoll from '../smoothscoll'

import Footer from './Footer'

import ButtonExample from './ButtonExample'
import CodeExample from './CodeExample'
import ContentExample from './ContentExample'
import DropdownExample from './DropdownExample'
import SpaceExample from './SpaceExample'
import StepperExample from './StepperExample'
import ToolbarExample from './ToolbarExample'

import './style.scss'

export default class App extends Component {
  componentDidMount () {
    smoothscoll()
  }

  render = () => (
    <div>
      <Toolbar
        class='demo-toolbar'
        title={<a href='#'>Simple-UX</a>}
      >
        <a href='#'>Home</a>
        <Dropdown label='Layout'>
          <a href='#content-example'>Content</a>
          <a href='#space-example'>Space</a>
        </Dropdown>
        <Dropdown label='Components'>
          <a href='#button-example'>Button</a>
          <a href='#code-example'>Code</a>
          <a href='#dropdown-example'>Dropdown</a>
          <a href='#stepper-example'>Stepper</a>
          <a href='#toolbar-example'>Toolbar</a>
        </Dropdown>
        <a class='no-underline' href='http://github.com/jacob-ebey/simple-ux'><i class='fa fa-github' /></a>
      </Toolbar>

      <Content class='initial-content'>
        <h1>Simple-UX</h1>
        <p>Simple yet elegant components for Preact.</p>
        <hr />

        <h2>Getting Started</h2>

        <p>Install the simple-ux packae:</p>
        <Code>{`npm install -s simple-ux`}</Code>

        <p>Import a component</p>
        <Code>{`import { Button } from 'simple-ux'`}</Code>

        <p>You are up and running!</p>

        <hr />

        <h2>Layout</h2>

        <p>
          We think less is more. That means we provide you with a few components to
          keep you on the right track in maintaining a good experience for users on
          every device.
        </p>
      </Content>

      <ContentExample />
      <SpaceExample />

      <Content>
        <hr />
        <h2>Components</h2>

        <p>This is the ever-growing component list.</p>
      </Content>

      <ButtonExample />
      <CodeExample />
      <DropdownExample />
      <StepperExample />
      <ToolbarExample />

      <Footer />
    </div>
  )
}
