import React from 'react'
import Layout from '../../components/Layout'
import EventList from '../../components/EventList'

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

            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=cXVlZXJsYW5kY2VudGVyQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=NzkwbjliMDZmOHNubWFyaWFqdWZ1NjRrbjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23A79B8E&amp;color=%230B8043"
              style={{border:"solid 1px #777"}}
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
              ></iframe>

            <EventList />
          </div>
        </section>
      </Layout>
    )
  }
}
