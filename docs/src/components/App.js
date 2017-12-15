import { h } from 'preact' // eslint-disable-line no-unused-vars

import 'src'

import Content from 'src/components/Content'

import ButtonExample from './ButtonExample'
import CodeExample from './CodeExample'

import './style.scss'

const App = () => (
  <div>
    <Content>
      <h1>Components</h1>

      <p>
        Preact Components have been provided to make consuming the library
        as simple as the styles themselves.
      </p>

      <ul>
        <li><a href='#button-example'>Button</a></li>
        <li><a href='#code-example'>Code</a></li>
      </ul>
    </Content>

    <ButtonExample />
    <CodeExample />
  </div>
)

export default App
