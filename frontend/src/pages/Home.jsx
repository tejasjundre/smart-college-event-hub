import React from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";

const upcomingEvents = [
  { _id: 1, name: "Tech Fest 2025", date: "Sep 25, 2025", shortDescription: "Exciting tech competitions and workshops." },
  { _id: 2, name: "Cultural Night", date: "Oct 5, 2025", shortDescription: "Music, dance, and fun activities." },
  { _id: 3, name: "Sports Day", date: "Oct 20, 2025", shortDescription: "Inter-college sports events." },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg text-white flex flex-col justify-center items-center text-center py-32 relative">
        <h1 className="text-5xl font-bold mb-4 animate-slide-up">Welcome to Smart College Events</h1>
        <p className="text-xl mb-6 animate-slide-up delay-200">Discover and participate in exciting college events.</p>
        <Link
          to="/events"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition animate-slide-up delay-400"
        >
          View Events
        </Link>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
