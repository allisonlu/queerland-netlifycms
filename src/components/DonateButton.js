import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './DonateButton.scss'

const DonateButton = ({ link, text }) => (
  <Link
    className="donate-button"
    to={link}>
    Donate to {text}
  </Link>
)

DonateButton.propTypes = {
  link: PropTypes.node,
  text: PropTypes.node,
}

export default DonateButton
