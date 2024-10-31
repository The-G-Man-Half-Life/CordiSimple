import React from 'react'
import { Link } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'

export default function Index({ statuses }) {
    const statusList = statuses.data

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <div className="py-12 mt-16"> 
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">
                            <div className="mb-6 flex items-center justify-between">
                                <Link href={route('dashboard')} className="text-rose-600 hover:text-rose-800 transition-colors">
                                    <ArrowLeft className="h-6 w-6" />
                                </Link>
                                <h3 className="text-2xl font-bold">Status List</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                ID
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                                Description
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {Array.isArray(statusList) && statusList.map((status) => (
                                            <tr key={status.id}>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{status.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{status.name}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{status.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-500">
                                Total: {statusList.length} statuses
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

