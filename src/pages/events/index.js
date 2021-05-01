import React from 'react'

import Layout from '../../components/Layout'
import EventList from '../../components/EventList'

export default class EventsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container mt-0"
          style={{
            backgroundImage: `url('/img/tanushree-rao-xqpni9wh0ck-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #9e66a3, -0.5rem 0 0 #9e66a3',
              backgroundColor: '#9e66a3',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EventList />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
