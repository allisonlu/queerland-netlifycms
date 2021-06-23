import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Breadcrumb = ({ backTo, className }) => (
  <nav
    className={"breadcrumb has-text-weight-bold is-large " + className}
    aria-label="breadcrumbs">
    <ul className="ml-0">
      <li>
        <Link
          to={backTo}
          className="breadcrumb__link"
        >← Back to {backTo.substring(1)}
        </Link>
      </li>
    </ul>
  </nav>
)

Breadcrumb.propTypes = {
  backTo: PropTypes.node,
}

export default Breadcrumb
