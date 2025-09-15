import React from "react";
import EventCard from "../components/EventCard";

const dashboardEvents = [
  { _id: 1, name: "Tech Fest 2025", date: "Sep 25, 2025", shortDescription: "Exciting tech competitions and workshops." },
  { _id: 2, name: "Cultural Night", date: "Oct 5, 2025", shortDescription: "Music, dance, and fun activities." },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Admin Dashboard</h2>
      <div className="flex justify-end mb-6">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-lg">
          Add Event
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
