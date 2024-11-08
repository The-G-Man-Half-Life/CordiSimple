import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Header from '@/Layouts/Header';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div className='w-full '>
            <AuthenticatedLayout />
        </div>

    );
}