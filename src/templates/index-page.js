import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import './index-page.scss'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
// import EventList from '../components/EventList'
import BlogRoll from '../components/BlogRoll'
import DonateButton from '../components/DonateButton'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  body,
  contentComponent
}) => {

  const PageContent = contentComponent || Content

  return (
    <div>

      <section
        className="full-width-image mt-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <div className="ribbon__container">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen is-family-monospace ribbon">
            {title}
          </h1>
          <h2 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen ribbon">
            {subheading}
          </h2>
        </div>
      </section>

      <section className="section">
        <div className="content column is-10 is-offset-3">
            <h3 className="has-text-weight-semibold is-size-2">
              {heading}
            </h3>

            <PageContent className="content" content={body} />
        </div>
      </section>

      <span className="section-divider--rainbow"></span>

      <section className="section">
        <div className="content">
          <h3 className="has-text-weight-semibold is-size-2 column is-10 is-offset-3">
            Latest events
          </h3>

          {/*
          <div className="home__post-section">
            <EventList />
          </div>
          */}

          <div className="has-text-centered">
            <Link className="home__button" to="/events">
              See all events →
            </Link>
          </div>

        </div>
      </section>

      <span className="section-divider--rainbow"></span>

      <section className="section">
        <div className="content">
          <h3 className="has-text-weight-semibold is-size-2 column is-10 is-offset-3">
            News & Updates
          </h3>

          <div className="home__post-section">
            <BlogRoll />
          </div>

        </div>
      </section>

      <span className="section-divider--rainbow"></span>

      <section className="section">
        <div className="content column is-3 is-offset-5">
          <DonateButton text="QueerLand" />
        </div>
      </section>

    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  body: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={page.frontmatter.image}
        title={page.frontmatter.title}
        heading={page.frontmatter.heading}
        subheading={page.frontmatter.subheading}
        body={page.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
