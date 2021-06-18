import React from "react";

const Calendar = () => {
  return (
    <iframe
      className="gcalendar column is-10 is-offset-1"
      title="QueerLand Event calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=cXVlZXJsYW5kY2VudGVyQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=NzkwbjliMDZmOHNubWFyaWFqdWZ1NjRrbjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23A79B8E&amp;color=%230B8043"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  );
};

export default Calendar;
