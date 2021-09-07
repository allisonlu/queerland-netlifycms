import React from 'react'
import PropTypes from 'prop-types'
import MarkdownContent from '../components/MarkdownContent'
import './DonateTier.scss'

const DonateTier = ({ data }) => (
  <ul className="donate-tier">
    {data.map((tier) => (
      <li key={tier.name} className="donate-tier__item">
        <div className="donate-tier__leaf"></div>
        <div className="donate-tier__content card">
          <h3 className="donate-tier__title is-size-4">{tier.name}</h3>
          <div className="donate-tier__price">$ {tier.price}</div>
          <MarkdownContent className="donate-tier__description has-text-left" content={tier.description}/>
        </div>
      </li>
    ))}
  </ul>
)

DonateTier.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default DonateTier
