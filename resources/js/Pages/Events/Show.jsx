import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react'

const Show = ({ event }) => {
    const eventData = event.data;

    return (
        <section className="flex justify-center items-center pt-8">
            <article className="text-center">
                <h1 className="text-2xl font-bold mb-4">{eventData.name}</h1>
                <p className="mb-4">{eventData.description}</p>
                <p><strong>Date:</strong> {eventData.date}</p>
                <p><strong>Ubication:</strong> {eventData.ubication}</p>
                <p><strong>Capacity:</strong> {eventData.capacity}</p>
                <p className='mb-3'><strong>Status ID:</strong> {eventData.status_id}</p>

                <Link href={route('events.index')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Go back
                </Link>
            </article>
        </section>
    );
};

export default Show;
