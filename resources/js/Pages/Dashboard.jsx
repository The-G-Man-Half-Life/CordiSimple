import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'
import EventCard from '@/Components/User/Dashboard/EventCard'
import React from 'react'


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="h-full overflow-x-hidden flex flex-col justify-center overflow-y-auto md:px-6">
        <Head title="Dashboard" />
        {/* Banner */}

        <div className="flex w-full border border-secondary content-center mx-auto flex-row md:flex-row mt-12 gap-4 rounded-lg overflow-hidden shadow-xl">
        {/* Left Image */}
        <div className="relative h-64 md:h-auto">
          <img
            src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
            alt="Event space with purple lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/20"></div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center p-8 bg-secondary text-white">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Would you like to promote your events?
          </h2>
          <p className="text-lg md:text-xl text-center mb-8">
            ¡Promote your events with us and reach a wide audience!
          </p>
          <button className="bg-primary hover:scale-110 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded hover:animate-vibrate duration-500">
            <p className='text-secondary'>Contact us</p>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-64 md:h-auto">
        <img
            src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
            alt="Event space with purple lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/20"></div>
        </div>
      </div>

      {/* render events */}
      <div className='w-full border border-secondary flex flex-row flex-wrap py-4 mt-12 '>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      </main >
      <Footer />
    </div >
  );
}
