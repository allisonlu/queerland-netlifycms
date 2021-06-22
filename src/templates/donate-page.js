import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import DonateTier from '../components/DonateTier'
import Content, { HTMLContent } from '../components/Content'
import './donate-page.scss'

export const DonatePageTemplate = ({ title, intro, tierList, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient donate-background">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              <PageContent className="content" content={intro} />

              <DonateTier data={tierList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

DonatePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  tierList: PropTypes.array,
  contentComponent: PropTypes.func,
}

const DonatePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DonatePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        intro={post.html}
        tierList={post.frontmatter.tiers}
      />
    </Layout>
  )
}

DonatePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DonatePage

export const donatePageQuery = graphql`
  query DonatePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        templateKey
        tiers {
          name
          price
          description
        }
      }
    }
  }
`
