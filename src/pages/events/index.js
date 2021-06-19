import React from 'react'
import Layout from '../../components/Layout'
import EventList from '../../components/EventList'
import Calendar from '../../components/Calendar'

export default class EventsPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container"
          style={{
            backgroundImage: `url('/img/tanushree-rao-xqpni9wh0ck-unsplash.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 ribbon"
          >
            Latest Events
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <Calendar />
            <span className="section-divider--rainbow"></span>
            <EventList />
          </div>
        </section>
      </Layout>
    )
  }
}
