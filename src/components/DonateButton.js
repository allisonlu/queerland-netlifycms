import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './DonateButton.scss'

const DonateButton = ({ text }) => (
  <Link
    className="donate-button"
    to="https://www.patreon.com/QueerLand">
    Donate to {text}
  </Link>
)

DonateButton.propTypes = {
  link: PropTypes.node,
  text: PropTypes.node,
}

export default DonateButton
