import React from 'react'
import PropTypes from 'prop-types'

const TeamMember = ({ data }) => (
  <ul>
    {data.map((person) => (
      <li key={person} class="mb-5">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img class="is-rounded" src={person.photo} alt="" />
                </figure>
              </div>
              <div class="media-content pt-4">
                <p class="title is-4">{person.name}</p>
                <p class="subtitle is-5">{person.position}</p>
              </div>
            </div>
            <p class="content">{person.blurb}</p>
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
