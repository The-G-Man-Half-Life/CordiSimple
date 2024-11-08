import { Head, Link } from '@inertiajs/react';
import Footer from '@/Layouts/Footer'
import WelcomeHeader from '@/Layouts/WelcomeHeader';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

            <Head title="Welcome" />
            <WelcomeHeader />

            <main className="mt-6">

            </main>
            <Footer />
            </div>

        </>
    );
}
