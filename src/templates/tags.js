import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Emoji from '../components/Emoji'
import './tags.scss'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li
        key={post.node.fields.slug}
        className="tags__result px-5 mb-4"
      >
        <span className="tags__result-type mr-4">
          { post.node.frontmatter.templateKey === 'event-single' ?  <Emoji symbol="🗓" label="calendar"/> :
          <Emoji symbol="✏️" label="pencil"/> }
        </span>

        <span>{post.node.frontmatter.date}</span>

        <h2 className="is-size-4 tags__result-title">
          <Link
            to={post.node.fields.slug}
            className="tags__result-link"
          >
            {post.node.frontmatter.title}
          </Link>
        </h2>

        <span className="section-divider--rainbow"></span>

      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} result${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section tags">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <span className="is-size-6 is-bold-light">{tagHeader}</span>
                <ul className="tags__list py-5">{postLinks}</ul>
                <p>
                  <Link
                    to="/tags/"
                    className="tags__all"
                  >Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
