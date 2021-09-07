import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import BlogRoll from '../components/BlogRoll'

export const BlogPageTemplate = ({ title, image, body, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>

      {image != null ? (
        <div 
          className="hero-container mt-0"
          >
            <img src= {`${ image.publicURL }`} />
        </div>
      ) : null
      }

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">

                <h2 className="title is-size-2 has-text-weight-bold is-bold-light ribbon">
                  {title}
                </h2>

                <PageContent className="content" content={body} />

                <span className="section-divider--rainbow"></span>

                <BlogRoll />

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  body: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BlogPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        body={post.html}
      />
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogPageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
        image {
          publicURL
        }
      }
    }
  }
`
