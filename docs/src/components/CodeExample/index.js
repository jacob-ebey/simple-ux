import { h } from 'preact' // eslint-disable-line no-unused-vars

import Code from 'src/components/Code'
import Content from 'src/components/Content'

const exampleCode = `
if (sayHello) {
  console.log('Hello, World!')
}
`

const CodeExample = () => (
  <Content id='code-example'>
    <h3>Code</h3>

    <p>
      A simple component to allow you to render formatted code. This is the component
      used throughout this site to show examples.
    </p>

    <Code>
      {`
<Code>
  {\`
${exampleCode.trim()}
  \`}
</Code>
      `}
    </Code>

    <p>Outputs:</p>

    <Code>{exampleCode}</Code>
  </Content>
)

export default CodeExample
