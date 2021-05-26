import React from 'react'
import PropTypes from 'prop-types'
import DonateButton from '../components/DonateButton'
import './DonateTier.scss'

const DonateTier = ({ data }) => (
  <ul className="donate-tier">
    {data.map((tier) => (
      <li key={tier.name} className="donate-tier__item">
        <div className="donate-tier__leaf"></div>
        <div className="donate-tier__content card">
          <h3 className="donate-tier__title is-size-4">{tier.name}</h3>
          <div className="donate-tier__price">$ {tier.price}</div>
          <p className="donate-tier__description">{tier.description}</p>

          <DonateButton
            link={tier.link}
            text={(tier.name).toLowerCase()}
          />
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
      link: PropTypes.string,
    })
  ),
}

export default DonateTier
