import React from "react";
import { useParams } from "react-router-dom";

const events = [
  { _id: 1, name: "Tech Fest 2025", date: "Sep 25, 2025", description: "Full day tech fest with coding competitions, workshops, and guest lectures." },
  { _id: 2, name: "Cultural Night", date: "Oct 5, 2025", description: "Music, dance, and fun activities for all students." },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e._id === parseInt(id));

  if (!event) return <p className="text-center mt-10 text-xl">Event not found</p>;

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold mb-4">{event.name}</h2>
      <p className="text-gray-600 mb-6">{event.date}</p>
      <p className="text-lg mb-8">{event.description}</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
        Register Now
      </button>
    </div>
  );
};

export default EventDetail;
