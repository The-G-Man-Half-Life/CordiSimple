import React from 'react';
import EventCard from '@/Components/User/Dashboard/EventCard';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';
import { Head } from '@inertiajs/react';
import ContacUs from '@/Components/User/Dashboard/ContacUs';

export default function Dashboard({ events }) {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className="min-h-screen bg-primary/10 dark:bg-primary-dark">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Head title="Dashboard" />

        {/* Banner */}
        <div className="flex flex-col md:flex-row w-11/12 h-96 mx-auto mt-12 gap-4 rounded-lg overflow-hidden shadow-xl bg-secondary text-white">
          <div className="relative h-64 md:h-auto md:w-1/3">
            <img
              src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
              alt="Event space with purple lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/20"></div>
          </div>
          <div className="flex flex-col items-center  justify-center p-8 text-center md:w-1/3 md: mb-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Would you like to promote your events?
            </h2>
            <p className="text-lg md:text-xl mb-8">
              ¡Promote your events with us and reach a wide audience!
            </p>
            <a
              onClick={() => {
                const contactSection = document.getElementById('contact-us');
                contactSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="inline-flex items-center px-6 py-2 bg-primary hover:bg-primary/90 text-text rounded-md transition-colors duration-200 font-medium cursor-pointer"
            >
              <p className="text-secondary">Contact us</p>
            </a>
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

        {/* Events Section */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-text-dark mb-4">
            Check out the <span className="text-secondary">events</span>
          </h1>
          <p className="text-text/80 text-2xl dark:text-text-dark/80 max-w-2xl mx-auto">
            Discover the latest events happening near you and don't miss the chance to join the fun!
          </p>
        </div>

        {/* Event Cards Grid */}
        {events && events.data && events.data.length > 0 ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* Increased gap */}
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

        {/* ContacUs Section */}
        <div id="contact-us" className="bg-secondary/10 py-12 mt-12 px-4 sm:px-6 lg:px-8">
          <ContacUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
