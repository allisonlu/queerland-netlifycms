import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './DonateButton.scss'

const DonateButton = ({ text, className }) => (
  <div className="has-text-centered">
    <Link
      className={"donate-button " + className}
      to="https://www.patreon.com/QueerLand">
      Donate to {text}
    </Link>
  </div>
)

DonateButton.propTypes = {
  link: PropTypes.node,
  text: PropTypes.node,
}

export default DonateButton
