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
        <div 
          className="hero-container mt-0"
          >
            <img 
              src= {`${ image.publicURL }`} 
              alt= ""
            />
        </div>
      ) : null
      }

      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">

                <h2 className="mb-5 is-size-2 has-text-weight-bold is-bold-light ribbon">
                  {title}
                </h2>

                <PageContent className="content" content={body} />

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
