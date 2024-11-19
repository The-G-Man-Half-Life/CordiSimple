import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

const Index = ({ events }) => {
    const eventsList = events.data;

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this event?")) {
            await fetch(`/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
                    'Accept': 'application/json',
                },
            });
            window.location.href = route('events.index');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
        <section className="flex justify-center items-center pt-8">
            <article className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-4 text-center">Event List</h1>
                <Link href="/events/create" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 mb-4 inline-block transition duration-200">Create Event</Link>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Description</th>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Ubication</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(eventsList) && eventsList.map(event => (
                                <tr key={event.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{event.name}</td>
                                    <td className="py-2 px-4 border-b">{event.description}</td>
                                    <td className="py-2 px-4 border-b">{new Date(event.date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b">{event.ubication}</td>
                                    <td className="py-2 px-4 border-b flex space-x-2">
                                        <Link href={`/events/${event.id}`} className="bg-green-500 text-white py-1 px-3 rounded-lg shadow hover:bg-green-600 transition duration-200">View</Link>
                                        <Link href={`/events/${event.id}/edit`} className="bg-yellow-500 text-white py-1 px-3 rounded-lg shadow hover:bg-yellow-600 transition duration-200">Edit</Link>
                                        <button onClick={() => handleDelete(event.id)} className="bg-red-500 text-white py-1 px-3 rounded-lg shadow hover:bg-red-600 transition duration-200">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5" className="py-2 text-gray-600 text-sm text-right">Total: {eventsList.length} events</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </article>
        </section>
        <Footer/>
        </div>
    );
};

export default Index;
