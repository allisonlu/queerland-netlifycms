import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Emoji from '../components/Emoji'
import Breadcrumb from '../components/Breadcrumb'

export const EventSingleTemplate = ({
  content,
  contentComponent,
  link,
  address,
  image,
  date,
  start,
  end,
  tags,
  title,
  recording,
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

            <Breadcrumb backTo="/events" />

            <time className="is-size-5">
              {date}<br/>
              {start} – {end}
            </time>

            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h2>

            <EventContent content={content} />

            {/* don't show button if event occurred in past  */}
            {Date.parse(date+" "+end, "yyyy-MM-dd HH:mm:ss") > Date.now() ? (
              <a href={link} className="interior__button is-link is-medium mt-6">RSVP here</a>
            ) : null }

            <div className="mt-6">
              <h3>
                <span className="mr-2">
                  <Emoji symbol="📍" label="Round pushpin"/>
                </span>

                Location:
              </h3>

              {address != null ? (
                <div>
                  {address.location_name}<br />
                  {address.street}<br />
                  {address.city + " "}
                  {address.post_code}
                </div>
              ) : "Online" }

            </div>

            {recording != null ? (
              <div>
                <h3 className="mt-5">Recording:</h3>

                <iframe
                  width="560"
                  height="315"
                  src={"https://www.youtube.com/embed/" + recording.substring(32)}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer;
                  autoplay; clipboard-write;
                  encrypted-media; gyroscope;
                  picture-in-picture" allowfullscreen
                ></iframe>
              </div>
            ) : null }


            {tags && tags.length ? (
              <div className="mt-6">
                <h4>Tags</h4>
                <ul className="post__tags ml-0">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link
                        className="post__tags-link"
                        to={`/tags/${kebabCase(tag)}/`}
                      >{tag}</Link>
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
  start: PropTypes.string,
  end: PropTypes.string,
  image: PropTypes.object,
  link: PropTypes.string,
  address: PropTypes.object,
  title: PropTypes.string,
  recording: PropTypes.string,
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
        start={post.frontmatter.start_time}
        end={post.frontmatter.end_time}
        image={post.frontmatter.featuredimage}
        link={post.frontmatter.link}
        address={post.frontmatter.address}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        recording={post.frontmatter.recording}
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
        start_time(formatString: "LT")
        end_time(formatString: "LT")
        title
        description
        link
        address {
          location_name
          street
          city
          post_code
        }
        tags
        featuredimage {
          publicURL
        }
        recording
      }
    }
  }
`
