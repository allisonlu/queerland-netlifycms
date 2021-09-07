import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TeamMember from '../components/TeamMember'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image,  intro, teamList, contentComponent }) => {
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
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>

                <PageContent className="content" content={intro} />

                <TeamMember data={teamList} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  intro: PropTypes.string,
  teamList: PropTypes.array,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        intro={post.html}
        teamList={post.frontmatter.team}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
        templateKey
        team {
          name
          position
          blurb
          photo {
            publicURL
          }
        }
      }
    }
  }
`
