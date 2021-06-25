import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

let calendars = [
  {
    calendarId: "790n9b06f8snmariajufu64kn4@group.calendar.google.com",
    color: "#9e66a3"
  },
];

let styles = {
  today: css`
    border: 2px solid #9C4F96;
  `,

  tooltip: css`
    border: 2px solid #d1a3fe;
    padding: 10px;

    h2 {
      color: #9e66a3;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #d1a3fe;
    }

    a { color: #577994; text-decoration: underline; }
    a:hover { color: #2AA8F2; }
    a:active { color: #456076; }


  `
}

const DisplayCalendar = () => {
  return (
    <div>
      <Calendar
        apiKey={`${process.env.GATSBY_GOOGLE_CAL_API_KEY}`}
        calendars={calendars}
        styles={styles}
      />
    </div>
  );
};

export default DisplayCalendar;
