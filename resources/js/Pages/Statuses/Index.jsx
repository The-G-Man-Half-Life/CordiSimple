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
        </div>
    );
};

export default Index;