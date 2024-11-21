import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';

const Create = () => {
    const [formData, setFormData] = useState({
        createdAt: '',
        modifiedAt: '',
        user_Id: '',
        status_Id: '',
        event_Id: '',
    });

    const [errors, setErrors] = useState({}); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Inertia.post('/reserves', formData);
            alert("Reserve created successfully");
            window.location.href = route('reserves.index'); 
        } catch (error) {
            
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <section className="flex justify-center items-center pt-8">
            <article className="text-center">
                <h1 className="text-2xl font-bold mb-4">Create Reserve</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="number" 
                        name="user_Id" 
                        placeholder="User ID" 
                        onChange={handleChange} 
                        className="border p-2 mb-2" 
                        required 
                    />
                    {errors.user_Id && <div className="text-red-500">{errors.user_Id}</div>}

                    <input 
                        type="number" 
                        name="status_Id" 
                        placeholder="Status ID" 
                        onChange={handleChange} 
                        className="border p-2 mb-2" 
                    />
                    {errors.status_Id && <div className="text-red-500">{errors.status_Id}</div>}

                    <input 
                        type="number" 
                        name="event_Id" 
                        placeholder="Event ID" 
                        onChange={handleChange} 
                        className="border p-2 mb-2" 
                        required 
                    />
                    {errors.event_Id && <div className="text-red-500">{errors.event_Id}</div>}

                    <button 
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
                    >
                        Create
                    </button>
                    <Link 
                        href={route('reserves.index')} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
                    >
                        Cancel
                    </Link>
                </form>
            </article>
        </section>
    );
};

export default Create;
