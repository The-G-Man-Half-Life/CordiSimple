import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react'

const Edit = ({ reserve }) => {
    const [formData, setFormData] = useState(reserve.data); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Inertia.put(`/reserves/${reserve.data.id}`, formData);

        alert("reserve updated successfully!");
        window.location.href = route('reserves.index'); 
    };

    return (
        <section className="flex justify-center items-center pt-8">
            <article className="max-w-lg w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Edit reserve</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date} // Usa el valor directamente, ya está en formato correcto
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ubication">Ubication</label>
                        <input
                            type="text"
                            name="ubication"
                            value={formData.ubication}
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="capacity">Capacity</label>
                        <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status_id">Status ID</label>
                        <input
                            type="number"
                            name="status_id"
                            value={formData.status_id}
                            onChange={handleChange}
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update
                        </button>
                        <Link href={route('reserves.index')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </Link>
                    </div>
                </form>
            </article>
        </section>
    );
};

export default Edit;
