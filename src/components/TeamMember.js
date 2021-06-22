import React from 'react'
import PropTypes from 'prop-types'
import MarkdownContent from '../components/MarkdownContent'

const TeamMember = ({ data }) => (
  <ul className="columns is-multiline">
    {data.map((person) => (
      <li key={person.name} className="column is-6">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img
                    className="is-rounded"
                    src={person.photo}
                    alt={person.name} />
                </figure>
              </div>
              <div className="media-content pt-4">
                <p className="title is-4">{person.name}</p>
                <p className="subtitle is-5">{person.position}</p>
              </div>
            </div>
            <MarkdownContent className="content" content={person.blurb} />
          </div>
        </div>
      </li>
    ))}

  </ul>
)

TeamMember.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.string,
      blurb: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
}

export default TeamMember
