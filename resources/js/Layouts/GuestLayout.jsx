import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-primary-dark rounded-t-2xl shadow-lg p-8">
                    <Link href="/" className="flex justify-center mb-8">
                        {/* <ApplicationLogo className="w-20 h-20" /> */}
                        <img src="/images/CordiSimpleLogo.jpg" alt="CordiSimple logo" className='w-40' />
                      </Link>
                    {children}
                </div>
                <div className="bg-third dark:bg-third-dark rounded-b-2xl shadow-lg p-4 text-center">
                    <p className="text-primary dark:text-text-dark text-sm">
                        &copy; {new Date().getFullYear()} Cordisimple. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
