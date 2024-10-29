import React from 'react';

const Index = ({ events }) => {
    console.log(events.data); 
    const eventsList = events.data; 

    return (
        <section className="flex justify-center items-center pt-8">
            <article className="text-center">
                <h1 className="text-2xl font-bold mb-4">Event List</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Name</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Description</th>
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Date</th> 
                                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Ubication</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(eventsList) && eventsList.map(event => (
                                <tr key={event.id} className="hover:bg-gray-100 transition-colors">
                                    <td className="py-2 px-4 border-b border-gray-200">{event.name}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{event.description}</td>
                                    <td className="py-2 px-4 border-b border-gray-200">{event.date}</td> 
                                    <td className="py-2 px-4 border-b border-gray-200">{event.ubication}</td> 
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="4" className="py-2 text-gray-600 text-sm">Total: {eventsList.length} events</td> 
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </article>
        </section>
    );
};

export default Index;
