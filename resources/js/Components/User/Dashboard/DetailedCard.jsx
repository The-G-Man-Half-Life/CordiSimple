import React from 'react';

export default
  function DetailedCard({ event }) {
    const statusMap = {
      1: 'Active',
      2: 'Inactive',
      3: 'Pending',
      4: 'Archived',
      5: 'Suspended',
      6: 'Completed',
    };
  return (
    <div
      className="w-8/12 mx-auto rounded-lg border border-gray-200 bg-primary p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="text-xl text-center font-semibold text-secondary dark:text-white">
        {event.name}
      </h3>
      <div className="mt-2 flex flex-row">
        <div className="mt-2 w-1/2 text-center text-md text-gray-500 dark:text-gray-400">
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Description
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {event.description}
            </p>
          </h5>
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Capacity
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {event.capacity}
            </p>
          </h5>
        </div>
        <div className="mt-2 w-1/2 text-center text-md text-secondary dark:text-gray-400">
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            location
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {event.ubication}
            </p>
          </h5>
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Date
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {event.date === null ? 'No date' : event.date}
            </p>
          </h5>
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Status
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
            {statusMap[event.status_id]}
            </p>
          </h5>
        </div>
      </div>
      <div className=" flex justify-center mt-4">
        <button
          type="button"
          className="bg-secondary hover:scale-110 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
