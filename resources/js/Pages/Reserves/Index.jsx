import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Layouts/Header';
import Footer from '@/Layouts/Footer';


const Index = ({ reserves }) => {
  console.log(reserves.data);
  const reserveList = reserves.data;

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this event?")) {
        await fetch(`/reserves/${id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
                'Accept': 'application/json',
            },
        });
        window.location.href = route('reserves.index');
    }
};

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
     <Header/>
    <section className="flex justify-center items-center pt-8">
      <article className="text-center">
        <h1 className="text-2xl font-bold mb-4">Reserve List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  User ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  Status ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  Created at
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  Modified at
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  Event ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reserveList) &&
                reserveList.map((reserve) => (
                  <tr
                    key={reserve.id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="py-2 px-4 border-b border-gray-200">
                      {reserve.user_Id}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {reserve.status_Id}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {reserve.createdAt}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {reserve.modifiedAt}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {reserve.event_Id}
                    </td>
                    <td className="py-2 px-4 border-b flex space-x-2">
                      <Link href={`/reserves/${reserve.id}`} className="bg-green-500 text-white py-1 px-3 rounded-lg shadow hover:bg-green-600 transition duration-200">View</Link>
                      <Link href={`/reserves/${reserve.id}/edit`} className="bg-yellow-500 text-white py-1 px-3 rounded-lg shadow hover:bg-yellow-600 transition duration-200">Edit</Link>
                      <button onClick={() => handleDelete(reserve.id)} className="bg-red-500 text-white py-1 px-3 rounded-lg shadow hover:bg-red-600 transition duration-200">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" className="py-2 text-gray-600 text-sm">
                  Total: {reserveList.length} Reserves
                </td>
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
