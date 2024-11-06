import { Link } from '@inertiajs/react';
import React from 'react'

export default function WelcomeHeader(auth) {
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
        <header className="flex justify-between items-center px-8 bg-primary">
            <div>
                <img src="/images/CordiSimpleLogo.jpg" className='w-32' alt="CordiSimpleImage" />
            </div>
            <nav className=" flex flex-1 justify-between">
                <div className='flex gap-x-8'>
                    <Link
                        className='ms-5 text-secondary font-black text-xl'
                    >
                        Home
                    </Link>
                    <Link
                        className='text-secondary font-black text-xl'
                    >
                        History
                    </Link>
                    <Link
                        className='text-secondary font-black text-xl'
                    >
                        Contact us
                    </Link>
                </div>
                <div>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className='rounded-md px-3 py-2 bg-secondary me-2 text-primary font-black text-lg'
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className='rounded-md px-3 py-2 bg-secondary me-2 text-primary font-black text-lg'
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 bg-secondary text-primary font-black text-lg me-5"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>

    )
}