import DetailedCard from './DetailedCard';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import CardModal from './CardModal';
export default function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
const handleDetailedEventClick = () => {
  console.log('Se hizo clic en la tarjeta');
  setIsOpen(true);
  console.log('Estado isOpen:', isOpen);
}

  return (
    <div>
      <div className="bg-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" onClick={handleDetailedEventClick}>
        <h3 className="text-3xl font-semibold text-text mb-4">
          {event.name}
        </h3>
        <div className="mb-6">
          <h5 className="text-text/80 mb-2">
            Description
          </h5>
          <p className="text-primary-dark text-lg line-clamp-4">
            {event.description}
          </p>
        </div>
        <div className="mb-6">
          <h5 className="text-text/80 mb-2">
            Date
          </h5>
          <p className="text-primary-dark text-md">
            {event.date}
          </p>
        </div>
        <div className="flex justify-center">
          {/* <Link
          href={route('events.show', event.id)}
          className="bg-text hover:bg-text/90 text-white px-6 py-2 rounded-md text-xl font-medium transition-all duration-300 hover:scale-105"
        >
          Read more
        </Link> */}
        </div>
      </div>

      <CardModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DetailedCard event={event} />
      </CardModal>
    </div>
  );
}
