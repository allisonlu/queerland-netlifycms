import React from "react";

const Calendar = () => {
  return (
    <iframe
      className="gcalendar column is-10 is-offset-1"
      title="QueerLand Event calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=NzkwbjliMDZmOHNubWFyaWFqdWZ1NjRrbjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23A79B8E&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showDate=1&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  );
};

export default Calendar;
