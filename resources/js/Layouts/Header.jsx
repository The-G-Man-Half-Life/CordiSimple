import React from 'react'
import { Link } from '@inertiajs/react'
import { Calendar, User, Menu } from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-primary dark:bg-primary-dark shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Calendar className="h-8 w-8 mr-2 text-title" />
                            <span className="text-2xl font-bold text-title">Cordisimple</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <Link href={route('dashboard')}
                            active={route().current('dashboard')} className="text-white hover:text-rose-200 transition-colors">
                            Dashboard
                        </Link>
                        <Link href={route('statuses.index')}
                            active={route().current('statuses.index')} className="text-white hover:text-rose-200 transition-colors">
                            Statuses
                        </Link>

                    </nav>
                    <div className="flex items-center">
                        <Link
                            href="/login"
                            className="text-title hover:text-secondary dark:text-title-dark dark:hover:text-secondary-dark transition-colors mr-4"
                        >
                            <User className="h-6 w-6" />
                        </Link>
                        <button className="md:hidden text-title hover:text-secondary dark:text-title-dark dark:hover:text-secondary-dark transition-colors">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}




