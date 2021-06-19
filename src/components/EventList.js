import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import './EventList.scss'
import "./Calendar.scss";

class EventList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="column is-10 is-offset-1">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article
                className={`event is-child block ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="event__thumbnail mr-5">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `Image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null }

                  <div>

                    <time>
                      <div className="event__date is-size-5 px-3 has-text-weight-bold">{post.frontmatter.date}</div>
                      <div className="event__time">{post.frontmatter.time}</div>
                    </time>

                    <Link
                      className="event__title title is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>

                    {post.frontmatter.tags && post.frontmatter.tags.length ? (
                      <ul className="post__tags mt-5 ml-0">
                        {post.frontmatter.tags.map((tag) => (
                          <li key={tag + `tag`}>
                            <Link
                              className="post__tags-link"
                              to={`/tags/${kebabCase(tag)}/`}
                            >{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                  </div>

                </header>
              </article>

              <span className="section-divider--rainbow"></span>

            </div>
          ))}
      </div>
    )
  }
}

EventList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event-single" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "ddd, MMM DD, YYYY")
                time(formatString: "h:mma")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventList data={data} count={count} />}
  />
)
