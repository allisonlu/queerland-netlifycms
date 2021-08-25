import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const LandingPageTemplate = ({ title, image, body, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>

      {image != null ? (
        <section 
          className="full-width-image-container mt-0"
          style={{
            backgroundImage: `url(${ image.publicURL })`,
          }}
          >
        </section>
      ) : null}

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

    </div>
  )
}

LandingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
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
        image={post.frontmatter.image}
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
        image {
          publicURL
        }
      }
    }
  }
`
