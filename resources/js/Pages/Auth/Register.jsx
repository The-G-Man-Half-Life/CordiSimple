import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { User, Mail, Lock, Calendar } from 'lucide-react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        birthdate: '',
        is_admin: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <h2 className="text-3xl font-bold mb-6 text-center text-title dark:text-title-dark">
                Join us and start planning your events
            </h2>

            <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                                required
                            />
                        </div>
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                            Last name
                        </label>
                        <div className="relative">
                            <input
                                id="last_name"
                                name="last_name"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                                required
                            />
                        </div>
                        <InputError message={errors.last_name} className="mt-2" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            required
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <label htmlFor="birthdate" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                        Birthdate
                    </label>
                    <div className="relative">
                        <input
                            id="birthdate"
                            type="date"
                            name="birthdate"
                            value={data.birthdate}
                            onChange={(e) => setData('birthdate', e.target.value)}
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            required
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.birthdate} className="mt-2" />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            required
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-text dark:text-text-dark mb-1">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            required
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-between">
                    <Link
                        href={route('login')}
                        className="text-sm text-text hover:text-text/80 dark:text-text-dark dark:hover:text-text-dark/80"
                    >
                        Already registered? Login
                    </Link>
                    <PrimaryButton className="bg-title hover:bg-title/90 hover:bg-title/90 hover:scale-110 transition duration-300 ease-in-out text-white dark:bg-title-dark dark:text-primary-dark dark:hover:bg-title-dark/90" disabled={processing}>
                        {processing ? 'loading...' : 'Register'}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
