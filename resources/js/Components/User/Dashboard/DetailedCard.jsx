export default
  function DetailedCard({ event }) {
  return (
    <div
      className="w-8/12 mx-auto rounded-lg border border-gray-200 bg-primary p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <h3 className="text-xl text-center font-semibold text-secondary dark:text-white">
        {/*event.name*/} Name of the event
      </h3>
      <div className="mt-2 flex flex-row">
        <div className="mt-2 w-1/2 text-center text-md text-gray-500 dark:text-gray-400">
          {/*event.description*/}
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Description
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {/*event.description*/} Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio cum ducimus, numquam iure cumque consequatur vitae quas suscipit praesentium eaque sit maiores quaerat aperiam placeat? Culpa dicta eligendi repudiandae?
            </p>
          </h5>
        </div>
        <div className="mt-2 w-1/2 text-center text-md text-secondary dark:text-gray-400">
        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
        location
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {/*event.location*/} location
            </p>
          </h5>
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Date
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {/*event.date*/} Date
            </p>
          </h5>
          <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
            Status
            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
              {/*event.status*/} Status
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
