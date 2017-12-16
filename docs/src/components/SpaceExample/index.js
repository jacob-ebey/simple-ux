import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content, Space } from 'src'

import './style.scss'

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

<Space style={spaceStyle}>
  <div style={blockStyle} />
  <div style={blockStyle} />
  <div style={blockStyle} />
</Space>

<Space even style={spaceStyle}>
  <div style={blockStyle} />
  <div style={blockStyle} />
  <div style={blockStyle} />
</Space>

<Space even breakpoint='phablet' style={spaceStyle}>
  <div style={blockStyle} />
  <div style={blockStyle} />
  <div style={blockStyle} />
</Space>
      `}
    </Code>

    <Space class='space-example'>
      <div class='space-example-block' />
      <div class='space-example-block' />
      <div class='space-example-block' />
    </Space>

    <Space class='space-example' even>
      <div class='space-example-block' />
      <div class='space-example-block' />
      <div class='space-example-block' />
    </Space>

    <Space class='space-example' even breakpoint='phablet'>
      <div class='space-example-block' />
      <div class='space-example-block' />
      <div class='space-example-block' />
    </Space>

  </Content>
)

export default SpaceExample
