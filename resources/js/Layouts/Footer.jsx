import React from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary dark:bg-secondary-dark mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4 text-title dark:text-title-dark">Cordisimple</h2>
                        <p className="text-title/80 dark:text-title-dark/80">
                            Simplifying event bookings with warmth and efficiency.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-title dark:text-title-dark">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/events"
                                    className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors"
                                >
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors"
                                >
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-title dark:text-title-dark">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-title/80 hover:text-title dark:text-title-dark/80 dark:hover:text-title-dark transition-colors">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-title/10 dark:border-title-dark/10 text-center">
                    <p className="text-title/60 dark:text-title-dark/60">
                        &copy; {new Date().getFullYear()} Cordisimple. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
