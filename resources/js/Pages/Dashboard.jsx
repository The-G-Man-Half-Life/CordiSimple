import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Header from '@/Layouts/Header';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div className='w-full '>
            <AuthenticatedLayout />
            <Header />
            <div className='flex flex-row'>
                <h2 className='mt-4 text-center w-1/2'> Buenas</h2>
                <h2>Hola</h2>
            </div>
        </div>

    );
}