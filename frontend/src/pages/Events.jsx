import React from "react";
import EventCard from "../components/EventCard";

const allEvents = [
  { _id: 1, name: "Tech Fest 2025", date: "Sep 25, 2025", shortDescription: "Exciting tech competitions and workshops." },
  { _id: 2, name: "Cultural Night", date: "Oct 5, 2025", shortDescription: "Music, dance, and fun activities." },
  { _id: 3, name: "Sports Day", date: "Oct 20, 2025", shortDescription: "Inter-college sports events." },
  { _id: 4, name: "Hackathon", date: "Nov 10, 2025", shortDescription: "Build projects in 24 hours." },
];

const Events = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">All Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
