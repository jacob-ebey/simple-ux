import { h } from 'preact' // eslint-disable-line no-unused-vars

import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Textbox from 'src/components/Textbox'

const TextboxExample = () => (
  <Content id='textbox-example'>
    <h3>Textbox</h3>

    <p>
      This component is used for univeral text input.
    </p>

    <h4>Label</h4>

    <p>If a label property is provided, a {`<label />`} element will be rendered before the input.</p>

    <Code>{`<Textbox label='Label' />`}</Code>
    <Textbox label='Label' />

    <h4>Inline</h4>

    <p>If an inline property is provided, the label will be rendered to the left of the input.</p>

    <Code>{`<Textbox inline label='Inline Label' />`}</Code>

    <Textbox inline label='Inline Label' />

    <h4>Multiline</h4>

    <p>
      By default, an {`<input />`} element is used, but by providing the multiline
      option, it will render a {`<textarea />`}.
    </p>

    <Code>{`<Textbox multiline />`}</Code>

    <Textbox multiline />
  </Content>
)

export default TextboxExample
