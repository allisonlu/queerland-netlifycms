import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResourcePageTemplate = ({ title, intro, contentComponent }) => {
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

              <PageContent className="content" content={intro} />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ResourcePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ResourcePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResourcePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro={post.html}
      />
    </Layout>
  )
}

ResourcePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResourcePage

export const resourcePageQuery = graphql`
  query ResourcePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
      }
    }
  }
`
