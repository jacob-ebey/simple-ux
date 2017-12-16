import { h, Component } from 'preact' // eslint-disable-line no-unused-vars

import 'src'

import Button from 'src/components/Button'
import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Dropdown from 'src/components/Dropdown'
import Space from 'src/components/Space'
import Textbox from 'src/components/Textbox'
import Toolbar from 'src/components/Toolbar'

import smoothscoll from '../smoothscoll'

import Footer from './Footer'

import ButtonExample from './ButtonExample'
import CodeExample from './CodeExample'
import ContentExample from './ContentExample'
import DropdownExample from './DropdownExample'
import SpaceExample from './SpaceExample'
import StepperExample from './StepperExample'
import TextboxExample from './TextboxExample'
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
        <Dropdown label='Layout' href='#layout-example'>
          <a href='#content-example'>Content</a>
          <a href='#space-example'>Space</a>
        </Dropdown>
        <Dropdown label='Components' href='#components-example'>
          <a href='#button-example'>Button</a>
          <a href='#code-example'>Code</a>
          <a href='#dropdown-example'>Dropdown</a>
          <a href='#stepper-example'>Stepper</a>
          <a href='#toolbar-example'>Toolbar</a>
        </Dropdown>
        <Dropdown label='Forms' href='#forms-example'>
          <a href='#textbox-example'>Textbox</a>
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
      </Content>

      <Content id='layout-example'>
        <hr />
        <h2>Layout</h2>

        <p>
          We think less is more. That means we provide you with minimal components to
          keep you on the right track in maintaining a responsive experience for users on
          every device.
        </p>
      </Content>

      <ContentExample />
      <SpaceExample />

      <Content id='components-example'>
        <hr />
        <h2>Components</h2>

        <p>This is the ever-growing component list.</p>
      </Content>

      <ButtonExample />
      <CodeExample />
      <DropdownExample />
      <StepperExample />
      <ToolbarExample />

      <Content id='forms-example'>
        <hr />
        <h2>Forms</h2>

        <p>Components are provided to build beautiful, responsive forms.</p>

        <Code>
          {`
<Textbox type='email' label='Email' placeholder='lol@rofl.com' />

<Space breakpoint='phablet'>
  <div style={{ flexGrow: 0.4 }}>
    <Textbox label='First Name' placeholder='First Name' />
    <Textbox label='Last Name' placeholder='Last Name' />
  </div>
  <div style={{ flexGrow: 0.4 }}>
    <Textbox label='Occupaton' placeholder='Occupaton' />
    <Textbox type='number' min={0} max={80} label='Years on Job' placeholder='Years on Job' />
  </div>
</Space>

<Textbox multiline rows={4} label='Message' placeholder='Message' />

<Button type='submit'>Submit</Button>
          `}
        </Code>

        <Textbox type='email' label='Email' placeholder='lol@rofl.com' />

        <Space breakpoint='phablet'>
          <div style={{ flexGrow: 0.4 }}>
            <Textbox label='First Name' placeholder='First Name' />
            <Textbox label='Last Name' placeholder='Last Name' />
          </div>
          <div style={{ flexGrow: 0.4 }}>
            <Textbox label='Occupaton' placeholder='Occupaton' />
            <Textbox type='number' min={0} max={80} label='Years on Job' placeholder='Years on Job' />
          </div>
        </Space>

        <Textbox multiline rows={4} label='Message' placeholder='Message' />

        <Button type='submit'>Submit</Button>
      </Content>

      <TextboxExample />

      <Footer />
    </div>
  )
}
