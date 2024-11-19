import React from 'react';
import { Link } from '@inertiajs/react'
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';

const Show = ({ reserve }) => {
    let reserveData = reserve.data
    console.log(reserveData)
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header/>
        <section className="flex justify-center items-center pt-8">
            <article className="text-center">
                <p><strong>Created at:</strong> {reserveData.created_at}</p>
                <p><strong>Modified at:</strong> {reserveData.modifiedAt}</p>
                <p><strong>Status id:</strong> {reserveData.status_id}</p>
                <p><strong>Event id:</strong> {reserveData.event_id}</p>
                <p><strong>User id:</strong> {reserveData.user_id}</p> 

                <Link href={route('reserves.index')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Go back
                </Link>
            </article>
        </section>
        <Footer/>
        </div>
    );
};

export default Show;