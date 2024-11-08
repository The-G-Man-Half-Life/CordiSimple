import React, { useState } from 'react';

export default function EventReserve({ event }) {
    const [showModal, setShowModal] = useState(false);

    const handleCancelClick = () => {
        setShowModal(true);
    };

    const handleConfirmCancel = () => {
        setShowModal(false);
        // Aquí puedes agregar la lógica para cancelar la reserva
        console.log("Reserva cancelada");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div className="w-full rounded-lg border border-gray-200 bg-primary p-6 shadow dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-title text-center text-gray-900 dark:text-white">
                {/*event.name*/} Name of the event
                <div className="border border-black flex justify-between ">
                    <div className="mt-2 w-1/2 text-center text-md text-gray-500 dark:text-gray-400">
                        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
                            Description
                            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe rerum illo esse laborum!
                            </p>
                        </h5>
                    </div>
                    <div className="mt-2 w-1/2 text-center text-md text-gray-500 dark:text-gray-400">
                        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
                            Date
                            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
                                {/*event.date*/} Date
                            </p>
                        </h5>
                        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
                            Location
                            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
                                {/*event.location*/} location
                            </p>
                        </h5>
                    </div>
                    <div className="mt-2 w-1/2 text-center text-md text-gray-500 dark:text-gray-400">
                        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
                            Available spaces
                            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
                                {/*event.capacity*/} spots
                            </p>
                        </h5>
                        <h5 className="mb-3 font-bold text-secondary dark:text-gray-400">
                            Status
                            <p className="mb-3 mt-2 font-normal text-black dark:text-gray-400">
                                {/*event.status*/} status
                            </p>
                        </h5>
                    </div>
                </div>
                <div className="mt-2 flex justify-between">
                    <h5 className="mt-2 text-end font-normal text-secondary dark:text-gray-400">
                        Days until the event
                        <p className="mt-2 font-normal text-black dark:text-gray-400">
                            {/*event.days*/} days
                        </p>
                    </h5>
                    <div className=" self-end">
                    <button
                            type="button"
                            className="bg-red-700 hover:scale-110 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded"
                            onClick={handleCancelClick}>
                            cancel
                        </button>
                    </div>
                </div>
            </h2>
{/* Modal de confirmación */}
{showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Are you sure you want to cancel this reservation?
                        </h3>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleConfirmCancel}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Yes, im sure
                            </button>
                            <button
                                onClick={handleCloseModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                No, go back
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}