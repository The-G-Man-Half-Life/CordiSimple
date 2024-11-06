export default
  function EventCard({ event }) {
  return (
    <div
      className="w-1/2 rounded-lg border border-gray-200 bg-primary p-6 shadow dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-title text-center text-gray-900 dark:text-white">
        {/*event.name*/} Name of the event
      </h3>
      <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
        Description
        <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
          {/*event.description*/} Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio cum ducimus, numquam iure cumque consequatur vitae quas suscipit praesentium eaque sit maiores quaerat aperiam placeat? Culpa dicta eligendi repudiandae?
        </p>
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {/*event.date*/}
      </p>
      {/*<Link
        href={route('events.show', event.id)}>
        <button
          type="button"
          href={route('events.show', event.id)}
          >View Details</button>
      </Link>*/}
      <div className=" flex justify-center mt-8">
        <button
          type="button"
          className="bg-secondary hover:scale-110 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded hover:animate-vibrate duration-500"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

