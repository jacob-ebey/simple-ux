import { h } from 'preact' // eslint-disable-line no-unused-vars

import { Code, Content } from 'src'

const ContentExample = () => (
  <Content id='content-example'>
    <h3>Content</h3>

    <p>
      This component is used as a "document" for content. It has a max-width of 700px,
      scales down nice on mobile devices and maintains a padding from the edges.
    </p>

    <p>
      All the content you see on this page is rendered inside Content components.
    </p>

    <Code>
      {`
<Content>
  <h1>Page Title <small>subcaption</small></h1>
  <p>ROFL, some content would go here.</p>
</Content>
      `}
    </Code>
  </Content>
)

export default ContentExample
