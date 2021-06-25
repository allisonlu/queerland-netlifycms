import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LandingPageTemplate = ({ title, body, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              <PageContent className="content" content={body} />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

LandingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LandingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LandingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        body={post.html}
      />
    </Layout>
  )
}

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
      }
    }
  }
`
