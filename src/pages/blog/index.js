import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container"
          style={{
            backgroundImage: `url('/img/daan-evers-tkn1wxrzq3s-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 ribbon"
          >
            News & Updates
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
