import React from 'react';

const Index = ({ statuses }) => {
    console.log('Statuses:', statuses);
        return (
        <div>
            <h1>Status List</h1>
            <ul>
                {Array.isArray(statuses) && statuses.map(status => (
                    <li key={status.id}>{status.name}</li>
                ))}
            </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(statuses) && statuses.map(status => (
                            <tr key={status.id}>
                                <td>{status.name}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </tfoot>
                </table>
        </div>
    );
};

export default Index;