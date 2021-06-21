import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

let calendars = [
  {
    calendarId: "790n9b06f8snmariajufu64kn4@group.calendar.google.com",
    color: "#9e66a3"
  },
];

const DisplayCalendar = () => {
  return (
    <div>
      <Calendar
        apiKey={`${process.env.GATSBY_WELCOME_MESSAGE}`}
        calendars={calendars}
      />
    </div>
  );
};

export default DisplayCalendar;
