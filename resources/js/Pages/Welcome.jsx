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

                <main className="flex-1 overflow-x-hidden overflow-y-auto px-4 md:px-6">
                    {/* Hero Section */}
                    <section className="w-90% h-[60vh] gap-8 bg-primary dark:bg-primary-dark mt-12 border-2 border-[#E56B79] flex flex-row justify-around">
                        <div className=' px-8 w-1/2 flex flex-col justify-center space-y-8'>
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter text-[#E56B79] sm:text-5xl xl:text-6xl">
                                    What do we do?
                                </h1>
                                <p className="text-xl text-[#242038] md:text-2xl">
                                    We are CordiSimple an event management company.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-[#E56B79]">
                                    we provide these services
                                </h2>
                                <ul className="space-y-2 text-[#242038]">
                                    <li className="flex items-center">
                                        • Personalized planning of events.
                                    </li>
                                    <li className="flex items-center">
                                        • Management of guests and attendees.
                                    </li>
                                    <li className="flex items-center">
                                        • Efficient and swift logistic.
                                    </li>
                                    <li className="flex items-center">
                                        • Complete support under the event.
                                    </li>
                                    <li className="flex items-center">
                                        • Zero stress for you.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='relative w-1/2  flex justify-center items-center'>
                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '0',
                                top: '0',
                                transform: 'translateX(-10%)'
                            }}>
                            </div>

                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 0, 0 100%, 100% 100%)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '25%',
                                top: '0',
                                transform: 'translateX(-5%)'
                            }}>
                            </div>

                            <div className='absolute w-1/2 h-full' style={{
                                clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
                                backgroundImage: 'url(https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain?height=800&width=600)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                left: '50%',
                                top: '0',
                                transform: 'translateX(0%)'
                            }}>
                            </div>
                        </div>




                    </section>

                    {/* Services Section */}
                    <section className="w-full py-12 md:py-24">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tighter text-[#E56B79] sm:text-4xl">
                                            Take care of enjoying with the ones you love the most
                                        </h2>
                                        <img
                                            alt="People enjoying event"
                                            className="aspect-video overflow-hidden rounded-xl object-cover"
                                            height="300"
                                            src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
                                            width="400"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tighter text-[#E56B79] sm:text-4xl">
                                            while we worry about the management and control behind it
                                        </h2>
                                        <img
                                            alt="Event planning"
                                            className="aspect-video overflow-hidden rounded-xl object-cover"
                                            height="300"
                                            src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
                                            width="400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Story Section */}
                    <section className="w-full py-12 md:py-24 bg-[rgba(247,126,140,0.5)]">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold tracking-tighter text-[#E56B79] sm:text-4xl">Our story</h2>
                                        <p className="text-[#F77E8C] md:text-xl">
                                            CordiSimple was founded out of a passion for creating unforgettable experiences. Starting as a Vancouver's
                                            small event planning business, we quickly gained a loyal following.
                                        </p>
                                        <p className="text-[#F77E8C] md:text-xl">
                                            As demand grew, we expanded into corporate events, weddings, and festivals without losing sight of our
                                            personal-first service. Our innovative approach helped establish CordiSimple as a leader in the event
                                            planning industry. Now recognized for our dedication to detail and commitment to making every occasion
                                            special, we continue to serve the greater Vancouver area.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        alt="CordiSimple Logo"
                                        className="aspect-square overflow-hidden rounded-xl object-contain"
                                        height="300"
                                        src="https://th.bing.com/th/id/OIP.GxyrAd7LveRRAAD9-3XNxAHaE8?rs=1&pid=ImgDetMain"
                                        width="300"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>

        </>
    );
}
