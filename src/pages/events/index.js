import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/Content'
import Layout from '../../components/Layout'
import EventList from '../../components/EventList'
import DisplayCalendar from '../../components/DisplayCalendar'

export const EventPageTemplate = ({
  image,
  title,
  body,
  contentComponent
}) => {

  const PageContent = contentComponent || Content

  return (
    <div>
      <div
        className="full-width-image-container"
        style={{
          backgroundImage: `url('/img/tanushree-rao-xqpni9wh0ck-unsplash.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1 ribbon"
        >
          Latest Events <br/> {title}
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <DisplayCalendar />
          <span className="section-divider--rainbow"></span>
        </div>
        <div className="container">
          <EventList />
        </div>
      </section>
    </div>
  )

}

EventPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  body: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    <Layout>
      <EventPageTemplate
        contentComponent={HTMLContent}
        image={page.frontmatter.image}
        title={page.frontmatter.title}
        body={page.html}
      />
    </Layout>
  )
}


EventPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventPage

export const eventLandingPageQuery = graphql`
  query EventPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`
