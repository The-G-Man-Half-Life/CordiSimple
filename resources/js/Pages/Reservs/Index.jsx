import React from 'react';

const Index = ({ Reserves }) => {
    console.log(reserve.data)
    const reserveList = reserve.data
    return (
        <section className="flex justify-center items-center pt-8">
    <article className="text-center">
        <h1 className="text-2xl font-bold mb-4">reserve List</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Name</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(reserveList) && reserveList.map(reserv => (
                        <tr key={reserv.id} className="hover:bg-gray-100 transition-colors">
                            <td className="py-2 px-4 border-b border-gray-200">{reserve.user_Id}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{reserve.status_Id}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2" className="py-2 text-gray-600 text-sm">Total: {reserveList.length} Reserves</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </article>
</section>



    );
};

export default Index;
