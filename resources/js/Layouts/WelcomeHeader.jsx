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

        <header className="bg-primary dark:bg-primary-dark shadow-md">
            <div className='px-4'>
                <div className='flex justify-between'>
                    <div>
                        <img src="/images/CordiSimpleLogo.jpg" className='w-32 ' alt="CordiSimpleImage" />
                    </div>
                    <nav className=" flex justify-between items-center w-full">
                        <div className='flex items-center h-full'>
                            <Link
                                className='text-secondary h-full font-black text-xl px-5 hover:bg-third transition-colors flex items-center'
                            >
                                Home
                            </Link>
                            <Link
                                className='text-secondary h-full font-black text-xl px-5 hover:bg-third transition-colors flex items-center'
                            >
                                History
                            </Link>
                            <Link
                                className='text-secondary h-full font-black text-xl px-5 hover:bg-third transition-colors flex items-center'
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
                </div>
            </div>


        </header>

    )
}