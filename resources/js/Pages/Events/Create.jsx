import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';


const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        ubication: '',
        capacity: '',
        status_id: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        await Inertia.post('/events', formData);
        alert("created sucesfully")
        window.location.href = route("events.index")
    };

    return (
        <section className="flex justify-center items-center pt-8">
            <article className="text-center">
                <h1 className="text-2xl font-bold mb-4">Create Event</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Event Name" onChange={handleChange} className="border p-2 mb-2" />
                    <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 mb-2" />
                    <input type="date" name="date" onChange={handleChange} className="border p-2 mb-2" />
                    <input type="text" name="ubication" placeholder="Ubication" onChange={handleChange} className="border p-2 mb-2" />
                    <input type="number" name="capacity" placeholder="Capacity" onChange={handleChange} className="border p-2 mb-2" />
                    <input type="number" name="status_id" placeholder="Status ID" onChange={handleChange} className="border p-2 mb-2" />
                    <button type="submit" className="bg-blue-500 text-white p-2">Create</button>
                </form>
            </article>
        </section>
    );
};

export default Create;
