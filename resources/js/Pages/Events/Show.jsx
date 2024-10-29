import React from 'react';

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
                <p><strong>Status ID:</strong> {eventData.status_id}</p>
            </article>
        </section>
    );
};

export default Show;
