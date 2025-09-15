import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => (
  <div className="event-card">
    <h3 className="font-semibold text-lg">{event.name}</h3>
    <p className="text-gray-600">{event.date}</p>
    <p className="mt-2 text-gray-800">{event.shortDescription}</p>
    <Link
      to={`/events/${event._id}`}
      className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      View Details
    </Link>
  </div>
);

export default EventCard;
