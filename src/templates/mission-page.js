import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TeamMember from '../components/TeamMember'
import Content, { HTMLContent } from '../components/Content'

export const MissionPageTemplate = ({ title, image,  intro, teamList, contentComponent }) => {
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
              <div className="section">
                <h2 className="mb-5 is-size-3 has-text-weight-bold is-bold-light">
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

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  intro: PropTypes.string,
  teamList: PropTypes.array,
  contentComponent: PropTypes.func,
}

const MissionPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MissionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        intro={post.html}
        teamList={post.frontmatter.team}
      />
    </Layout>
  )
}

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MissionPage

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
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
