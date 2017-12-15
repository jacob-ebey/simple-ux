import { h } from 'preact' // eslint-disable-line no-unused-vars

import Code from 'src/components/Code'
import Content from 'src/components/Content'
import Space from 'src/components/Space'

import './style.scss'

const SpaceExample = () => (
  <Content id='space-example'>
    <h3>Space</h3>

    <p>
      This component is used to space items in a row..
    </p>

    <Code>
      {`
<Space class='space-example'>
  <div class='example-block' />
  <div class='example-block' />
  <div class='example-block' />
</Space>

<Space class='space-example' even>
  <div class='example-block' />
  <div class='example-block' />
  <div class='example-block' />
</Space>
      `}
    </Code>

    <h4>Default</h4>
    <Space class='space-example'>
      <div class='example-block' />
      <div class='example-block' />
      <div class='example-block' />
    </Space>

    <h4>Even</h4>
    <Space class='space-example' even>
      <div class='example-block' />
      <div class='example-block' />
      <div class='example-block' />
    </Space>

  </Content>
)

export default SpaceExample
