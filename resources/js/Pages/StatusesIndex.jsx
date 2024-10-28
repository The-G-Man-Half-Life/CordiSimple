import { Link } from '@inertiajs/inertia-react';
import { route } from 'ziggy-js'; // Cambiado a importación con llaves

const StatusesIndex = ({ statuses }) => {
    return (
        <div>
            <h1>Statuses</h1>
            <Link href={route('statuses.create')}>Create New Status</Link>
            <ul>
                {statuses.map(status => (
                    <li key={status.id}>
                        {status.name}
                        <Link href={route('statuses.edit', status.id)}>Edit</Link>
                        <form action={route('statuses.destroy', status.id)} method="POST" style={{ display: 'inline' }}>
                            <input type="hidden" name="_method" value="DELETE" />
                            <button type="submit">Delete</button>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StatusesIndex;
