import React from 'react';
import EventCard from '@/Components/User/Dashboard/EventCard';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { Head } from '@inertiajs/react';

export default function Dashboard({ events }) {
  console.log(events);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="h-full overflow-x-hidden flex flex-col justify-center overflow-y-auto md:px-6">
        <Head title="Dashboard" />

        {/* Banner */}
        <div className="flex flex-col md:flex-row w-full mx-auto mt-12 gap-4 rounded-lg overflow-hidden shadow-xl bg-secondary text-white">
          <div className="relative h-64 md:h-auto md:w-1/3">
            <img
              src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
              alt="Event space with purple lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/20"></div>
          </div>
          <div className="flex flex-col items-center justify-center p-8 text-center md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Would you like to promote your events?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              ¡Promote your events with us and reach a wide audience!
            </p>
            <button className="bg-primary hover:scale-110 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded">
              <p className="text-secondary">Contact us</p>
            </button>
          </div>
          <div className="relative h-64 md:h-auto md:w-1/3">
            <img
              src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
              alt="Event space with purple lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/20"></div>
          </div>
        </div>

        {/* Event Section */}
        <div className="flex flex-col items-center justify-center py-8 mt-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Check out the <span className="text-secondary">events</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center">
            Discover the latest events happening near you and don't miss the chance to join the fun!
          </p>
        </div>

        {/* Event Cards Grid */}
        {events && events.data && events.data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {events.data.map((event) => (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-text/70 dark:text-text-dark/70 py-12">
            <p>No events found. Check back later!</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

