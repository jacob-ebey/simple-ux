import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content, Space } from 'src'

import './style.scss'

const Block = () => (
  <div class='space-example-block' />
)

const SpaceExample = () => (
  <Content id='space-example'>
    <h3>Space</h3>

    <p>
      This component is used to space items in a row..
    </p>

    <Code>
      {`
const spaceStyle = {
  background: '#ccc',
  padding: '1em 0'
}

const blockStyle = {
  flexGrow: 0.25,
  height: '100px',
  background: 'blue',
  border: '2px solid orange'
}

const Block = () => (
  <div style={blockStyle} />
)

<Space style={spaceStyle}>
  <Block />
  <Block />
  <Block />
</Space>

<Space even style={spaceStyle}>
  <Block />
  <Block />
  <Block />
</Space>

<Space even breakpoint='phablet' style={spaceStyle}>
  <Block />
  <Block />
  <Block />
</Space>
      `}
    </Code>

    <Space class='space-example'>
      <Block />
      <Block />
      <Block />
    </Space>

    <Space class='space-example' even>
      <Block />
      <Block />
      <Block />
    </Space>

    <Space class='space-example' even breakpoint='phablet'>
      <Block />
      <Block />
      <Block />
    </Space>

  </Content>
)

export default SpaceExample
