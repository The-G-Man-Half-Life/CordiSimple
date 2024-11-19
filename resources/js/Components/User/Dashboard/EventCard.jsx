import DetailedCard from './DetailedCard';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import CardModal from './CardModal';
export default function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDetailedEventClick = () => {
    setIsOpen(true);
    console.log('Estado isOpen:', isOpen);
  }
  const statusMap = {
    1: 'Active',
    2: 'Inactive',
    3: 'Pending',
    4: 'Archived',
    5: 'Suspended',
    6: 'Completed',
  };
  return (
    <div>

      <div className="bg-primary rounded-lg p-6 shadow-xl hover:shadow-xl dark:bg-primary-dark hover:scale-105 hover:cursor-pointer hover:shadow-secondary/50 transition-shadow duration-300" onClick={handleDetailedEventClick}>
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
        <div className="mb-6 flex flex-row justify-between">
          <h5 className="text-text/80 mb-2">
            Date
          </h5>
          <p className="text-primary-dark text-md">
            {event.date}
          </p>
          <p className="text-primary-dark text-md">
            {statusMap[event.status_id]}
          </p>
        </div>
      </div>

      <CardModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DetailedCard event={event} />
      </CardModal>
    </div>
  );
}
