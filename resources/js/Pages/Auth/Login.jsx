import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Mail, Lock, Check } from 'lucide-react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar sesión" />

            <h2 className="text-3xl font-bold mb-6 text-center text-title dark:text-title-dark">
                Welcome to Cordisimple
            </h2>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800/30 p-3 rounded">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
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
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <Mail className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
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
                            className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-title focus:border-title dark:bg-secondary-dark dark:border-secondary-dark dark:text-white dark:focus:ring-title-dark dark:focus:border-title-dark"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <Lock className="absolute right-3 top-2.5 h-5 w-5 text-secondary dark:text-secondary-dark" />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                        className="h-4 w-4 text-title focus:ring-title border-secondary rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-text dark:text-text-dark">
                        Remember me
                    </label>
                </div>

                <div>
                    <PrimaryButton className="w-full bg-title hover:bg-title/90 hover:scale-110 transition duration-300 ease-in-out text-white dark:bg-title-dark dark:text-primary-dark dark:hover:bg-title-dark/90 " disabled={processing}>
                        {processing ? 'Loading...' : 'Log in'}
                    </PrimaryButton>
                </div>

                <div className="flex items-center justify-between text-sm">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-text hover:text-text/80 dark:text-text-dark dark:hover:text-text-dark/80"
                        >
                            Forgot password?
                        </Link>
                    )}
                    <Link
                        href={route('register')}
                        className="text-text hover:text-text/80 dark:text-text-dark dark:hover:text-text-dark/80"
                    >
                      Create account
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
