import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import './BlogRoll.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-8 is-offset-2" key={post.id}>
              <article
                className="blog__post is-child"
              >

                {post.frontmatter.featuredimage ? (
                  <div className="blog__post-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `Image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}

                <header>
                  <Link
                    className="blog__post-title title is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>

                  <time className="blog__post-date is-size-5 is-block">
                    {post.frontmatter.date}
                  </time>
                </header>

                <p className="blog__post-excerpt">{post.excerpt}</p>

                <Link className="home__button" to={post.fields.slug}>
                    Keep Reading →
                </Link>
              </article>

              <span className="section-divider--rainbow"></span>

            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
