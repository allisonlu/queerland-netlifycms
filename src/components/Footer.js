import React from 'react'
import { Link } from 'gatsby'

import './Footer.scss'

import logo from '../img/logo.svg'
import instagram from '../img/social/instagram--color.svg'
import eventbrite from '../img/social/eventbrite.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer__wrapper has-text-centered">

        <img
          src={logo}
          alt="Logo"
          className="footer__logo"
        />

        <div className="columns footer__menu-container">

          <ul className="column is-4 footer__menu-list">
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/">
                Home
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/about">
                About
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/events">
                Events
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>

          <ul className="column is-4 footer__menu-list">
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/resources">
                Resources
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/donate">
                Donate
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="footer__menu-item">
              <a
                className="footer__menu-link"
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin
              </a>
            </li>
          </ul>

          <div className="column is-4 footer__social">
            <a
              title="instagram"
              href="https://www.instagram.com/queerlandcenter/"
              className="footer__social-link"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="footer__social-logo"
                />
            </a>
            <a
              title="eventbrite"
              href="https://www.eventbrite.com/o/queerland-32889686413"
              className="footer__social-link"
            >
              <img
                src={eventbrite}
                alt="Eventbrite"
                className="footer__social-logo"
                />
            </a>
          </div>

        </div>

      </footer>
    )
  }
}

export default Footer
