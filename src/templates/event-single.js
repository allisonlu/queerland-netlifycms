import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EventSingleTemplate = ({
  content,
  contentComponent,
  link,
  image,
  date,
  tags,
  title,
  helmet,
}) => {
  const EventContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            {image != null ? (
              <div
                className="full-width-image-container mt-0"
                style={{
                  backgroundImage: `url( ${image.publicURL})`
                }}
              ></div>
            ) : null }

            <time className="is-size-5">{date}</time>

            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <EventContent content={content} />

            {/* don't show button if event occurred in past  */}
            {Date.parse(date) > Date.now() ? (
              <a href={link} className="button is-link is-medium mt-6">RSVP here</a>
            ) : null }

            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </section>
  )
}

EventSingleTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const EventSingle = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventSingleTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Events">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        image={post.frontmatter.featuredimage}
        link={post.frontmatter.link}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

EventSingle.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EventSingle

export const eventPageQuery = graphql`
  query EventSingleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        link
        tags
        featuredimage {
          publicURL
        }
      }
    }
  }
`
